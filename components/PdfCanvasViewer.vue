<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'

type PdfViewport = {
  width: number
  height: number
}

type PdfRenderTask = {
  promise: Promise<void>
  cancel?: () => void
}

type PdfPage = {
  getViewport: (options: { scale: number }) => PdfViewport
  render: (options: { canvasContext: CanvasRenderingContext2D; viewport: PdfViewport }) => PdfRenderTask
  cleanup?: () => void
}

type PdfDocument = {
  numPages: number
  getPage: (pageNumber: number) => Promise<PdfPage>
  destroy: () => Promise<void>
}

type PdfLoadingTask = {
  promise: Promise<PdfDocument>
  destroy?: () => void
}

type PdfJsModule = {
  GlobalWorkerOptions: {
    workerSrc: string
  }
  getDocument: (options: {
    data: Uint8Array
    cMapPacked?: boolean
    cMapUrl?: string
    standardFontDataUrl?: string
  }) => PdfLoadingTask
}

const props = defineProps<{
  source: string
}>()

const publicPath = usePublicPath()
const stageRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const pageNumber = ref(1)
const pageCount = ref(0)
const isLoading = ref(false)
const isRendering = ref(false)
const errorMessage = ref('')
const pdfDocument = shallowRef<PdfDocument | null>(null)

let pdfJsPromise: Promise<PdfJsModule> | null = null
let loadingTask: PdfLoadingTask | null = null
let activeRenderTask: PdfRenderTask | null = null
let renderRun = 0
let loadRun = 0
let resizeTimer: ReturnType<typeof setTimeout> | null = null

const loadPdfJs = async () => {
  if (!pdfJsPromise) {
    pdfJsPromise = import(/* @vite-ignore */ publicPath('/vendor/pdfjs/pdf.min.mjs')) as Promise<PdfJsModule>
  }

  const pdfjs = await pdfJsPromise
  pdfjs.GlobalWorkerOptions.workerSrc = publicPath('/vendor/pdfjs/pdf.worker.min.mjs')

  return pdfjs
}

const stopActiveRender = () => {
  activeRenderTask?.cancel?.()
  activeRenderTask = null
}

const destroyDocument = async () => {
  stopActiveRender()
  loadingTask?.destroy?.()
  loadingTask = null

  if (pdfDocument.value) {
    const documentToDestroy = pdfDocument.value
    pdfDocument.value = null
    await documentToDestroy.destroy()
  }
}

const renderPage = async () => {
  const document = pdfDocument.value
  const canvas = canvasRef.value
  const stage = stageRef.value

  if (!document || !canvas || !stage) {
    return
  }

  stopActiveRender()
  isRendering.value = true
  const currentRun = ++renderRun

  try {
    const page = await document.getPage(pageNumber.value)

    if (currentRun !== renderRun) {
      return
    }

    const baseViewport = page.getViewport({ scale: 1 })
    const availableWidth = Math.max(280, stage.clientWidth - 2)
    const cssScale = Math.min(availableWidth / baseViewport.width, 1.75)
    const outputScale = Math.min(window.devicePixelRatio || 1, 2)
    const renderViewport = page.getViewport({ scale: cssScale * outputScale })
    const cssWidth = Math.floor(baseViewport.width * cssScale)
    const cssHeight = Math.floor(baseViewport.height * cssScale)
    const context = canvas.getContext('2d')

    if (!context) {
      throw new Error('Canvas is not available')
    }

    canvas.width = Math.floor(renderViewport.width)
    canvas.height = Math.floor(renderViewport.height)
    canvas.style.width = `${cssWidth}px`
    canvas.style.height = `${cssHeight}px`
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, canvas.width, canvas.height)

    activeRenderTask = page.render({
      canvasContext: context,
      viewport: renderViewport
    })

    await activeRenderTask.promise
    page.cleanup?.()
  } catch (error) {
    if (error instanceof Error && error.name === 'RenderingCancelledException') {
      return
    }

    errorMessage.value = 'Не удалось показать страницу документа.'
  } finally {
    if (currentRun === renderRun) {
      isRendering.value = false
      activeRenderTask = null
    }
  }
}

const loadDocument = async () => {
  const currentRun = ++loadRun
  isLoading.value = true
  isRendering.value = false
  errorMessage.value = ''
  pageNumber.value = 1
  pageCount.value = 0

  try {
    await destroyDocument()

    const response = await fetch(publicPath(props.source), {
      cache: 'force-cache'
    })

    if (!response.ok) {
      throw new Error(`PDF request failed: ${response.status}`)
    }

    const data = new Uint8Array(await response.arrayBuffer())
    const pdfjs = await loadPdfJs()

    loadingTask = pdfjs.getDocument({
      data,
      cMapPacked: true,
      cMapUrl: publicPath('/vendor/pdfjs/cmaps/'),
      standardFontDataUrl: publicPath('/vendor/pdfjs/standard_fonts/')
    })

    const document = await loadingTask.promise

    if (currentRun !== loadRun) {
      await document.destroy()
      return
    }

    pdfDocument.value = document
    pageCount.value = document.numPages
    isLoading.value = false
    await nextTick()
    await renderPage()
  } catch (error) {
    if (currentRun === loadRun) {
      errorMessage.value = 'Не удалось открыть документ.'
    }
  } finally {
    if (currentRun === loadRun && !pdfDocument.value) {
      isLoading.value = false
    }
  }
}

const goToPage = async (step: number) => {
  const nextPage = pageNumber.value + step

  if (nextPage < 1 || nextPage > pageCount.value || isLoading.value) {
    return
  }

  pageNumber.value = nextPage
  await renderPage()
}

const handleResize = () => {
  if (!pdfDocument.value) {
    return
  }

  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }

  resizeTimer = setTimeout(() => {
    void renderPage()
  }, 160)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  void loadDocument()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)

  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }

  loadRun += 1
  void destroyDocument()
})

watch(
  () => props.source,
  () => {
    void loadDocument()
  }
)
</script>

<template>
  <div class="pdf-viewer__body">
    <div v-if="pageCount > 0" class="pdf-viewer__toolbar" aria-label="Навигация по документу">
      <button
        class="pdf-viewer__nav-button"
        type="button"
        :disabled="pageNumber <= 1 || isLoading || isRendering"
        @click="goToPage(-1)"
      >
        Назад
      </button>
      <span class="pdf-viewer__page-counter">Страница {{ pageNumber }} / {{ pageCount }}</span>
      <button
        class="pdf-viewer__nav-button"
        type="button"
        :disabled="pageNumber >= pageCount || isLoading || isRendering"
        @click="goToPage(1)"
      >
        Вперед
      </button>
    </div>

    <div v-if="isLoading" class="pdf-viewer__state">Загрузка документа...</div>
    <div v-else-if="errorMessage" class="pdf-viewer__state pdf-viewer__state--error">
      {{ errorMessage }}
    </div>
    <div v-else ref="stageRef" class="pdf-viewer__stage" :class="{ 'is-rendering': isRendering }">
      <canvas ref="canvasRef" class="pdf-viewer__canvas" />
    </div>
  </div>
</template>
