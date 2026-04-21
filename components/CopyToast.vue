<script setup lang="ts">
const isVisible = ref(false)
const message = ref('Текст скопирован')
let hideTimer: ReturnType<typeof setTimeout> | undefined

const showToast = (event: Event) => {
  const customEvent = event as CustomEvent<{ message?: string }>
  message.value = customEvent.detail?.message || 'Текст скопирован'
  isVisible.value = true

  if (hideTimer) {
    clearTimeout(hideTimer)
  }

  hideTimer = setTimeout(() => {
    isVisible.value = false
  }, 2200)
}

onMounted(() => {
  window.addEventListener('copy-toast', showToast)
})

onBeforeUnmount(() => {
  window.removeEventListener('copy-toast', showToast)

  if (hideTimer) {
    clearTimeout(hideTimer)
  }
})
</script>

<template>
  <Transition name="copy-toast">
    <div v-if="isVisible" class="copy-toast" role="status" aria-live="polite">
      {{ message }}
    </div>
  </Transition>
</template>
