<script setup lang="ts">
const props = defineProps<{
  error?: {
    statusCode?: number | string
    statusMessage?: string
    message?: string
  }
}>()

const statusCode = computed(() => Number(props.error?.statusCode || 404))
const isNotFound = computed(() => statusCode.value === 404)
const pageTitle = computed(() => (isNotFound.value ? 'Страница не найдена' : 'Ошибка'))
const pageText = computed(() =>
  isNotFound.value
    ? 'Похоже, такой страницы нет или ссылка устарела. Вернитесь на главную страницу курса или откройте учебные материалы.'
    : 'Что-то пошло не так. Попробуйте вернуться на главную страницу курса.'
)

useSeoMeta({
  title: () => `${pageTitle.value} | Методология диссертационного исследования`,
  description: () => pageText.value,
  robots: 'noindex, follow'
})
</script>

<template>
  <NotFoundPage :status-code="statusCode" :title="pageTitle" :text="pageText" />
</template>