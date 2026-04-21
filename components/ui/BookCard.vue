<script setup lang="ts">
const publicPath = usePublicPath()

withDefaults(
  defineProps<{
    label?: string
    hover?: boolean
    icon?: 'book' | 'presentation'
    pdfPath?: string
    href?: string
  }>(),
  {
    label: '',
    hover: false,
    icon: 'book'
  }
)

defineEmits<{
  openPdf: []
}>()
</script>

<template>
  <component
    :is="pdfPath ? 'button' : href ? 'a' : 'article'"
    class="book-card"
    :class="{ 'book-card--hover': hover, 'book-card--clickable': pdfPath || href }"
    :type="pdfPath ? 'button' : undefined"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :aria-label="pdfPath ? `Открыть PDF: ${label}` : href ? `Открыть ссылку: ${label}` : undefined"
    @click="pdfPath && $emit('openPdf')"
  >
    <img
      class="book-card__icon"
      :src="publicPath(icon === 'presentation' ? '/images/icon-presentation.svg' : '/images/icon-book.svg')"
      alt=""
      aria-hidden="true"
    />
    <p class="book-card__text">
      <slot>{{ label }}</slot>
    </p>
  </component>
</template>
