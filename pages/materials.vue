<script setup lang="ts">
import { ref } from 'vue'
import { materialSections } from '~/data/materials'

useSeoMeta({
  title: 'Учебные материалы | Методология диссертационного исследования',
  description:
    'Учебные пособия, монографии, учебники и видеоматериалы Сергея Григорьевича Селеткова по методологии диссертационного исследования.',
  ogTitle: 'Учебные материалы | Методология диссертационного исследования',
  ogDescription:
    'PDF-материалы и внешние учебные ссылки по методологии диссертационного исследования.',
  twitterTitle: 'Учебные материалы | Методология диссертационного исследования',
  twitterDescription:
    'Учебные пособия, монографии, учебники и видеоматериалы по методологии диссертационного исследования.'
})

const selectedPdfPath = ref<string | null>(null)
const selectedPdfTitle = ref('')

const openPdf = (path: string, title: string) => {
  selectedPdfPath.value = path
  selectedPdfTitle.value = title
}

const closePdf = () => {
  selectedPdfPath.value = null
  selectedPdfTitle.value = ''
}
</script>

<template>
  <main class="landing-page materials-page">
    <div class="landing-page__shell">
      <AppHeader active-page="materials" />

      <div class="materials-page__content">
        <section
          v-for="(section, sectionIndex) in materialSections"
          :key="section.title"
          class="materials-section"
          :aria-labelledby="`materials-title-${sectionIndex}`"
        >
          <h1 v-if="sectionIndex === 0" :id="`materials-title-${sectionIndex}`">{{ section.title }}</h1>
          <h2 v-else :id="`materials-title-${sectionIndex}`">{{ section.title }}</h2>

          <div class="materials-section__list">
            <BookCard
              v-for="item in section.items"
              :key="item.title"
              :icon="item.icon || 'book'"
              :label="item.title"
              :pdf-path="item.pdfPath"
              :href="item.href"
              @open-pdf="item.pdfPath && openPdf(item.pdfPath, item.title)"
            >
              {{ item.title }}
            </BookCard>
          </div>
        </section>
      </div>

      <div
        v-if="selectedPdfPath"
        class="pdf-viewer"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedPdfTitle"
        @click.self="closePdf"
        @contextmenu.prevent
      >
        <div class="pdf-viewer__panel">
          <div class="pdf-viewer__head">
            <p>{{ selectedPdfTitle }}</p>
            <button class="pdf-viewer__close" type="button" aria-label="Закрыть просмотр PDF" @click="closePdf">
              Закрыть
            </button>
          </div>
          <PdfCanvasViewer :source="selectedPdfPath || ''" />
        </div>
      </div>

      <AppFooter />
      <CopyToast />
    </div>
  </main>
</template>
