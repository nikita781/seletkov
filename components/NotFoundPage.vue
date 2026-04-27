<script setup lang="ts">
const publicPath = usePublicPath()

withDefaults(
  defineProps<{
    statusCode?: number | string
    title?: string
    text?: string
  }>(),
  {
    statusCode: 404,
    title: 'Страница не найдена',
    text: 'Похоже, такой страницы нет или ссылка устарела. Вернитесь на главную страницу курса или откройте учебные материалы.'
  }
)
</script>

<template>
  <main class="landing-page error-page">
    <div class="landing-page__shell error-page__shell">
      <AppHeader />

      <section class="not-found" aria-labelledby="error-title">
        <div class="not-found__card">
          <div class="not-found__content">
            <p class="not-found__eyebrow">{{ statusCode }}</p>
            <h1 id="error-title">{{ title }}</h1>
            <p class="not-found__text">{{ text }}</p>

            <div class="not-found__actions" aria-label="Навигация со страницы ошибки">
              <a class="ui-button ui-button--primary" :href="publicPath('/')">
                <span>На главную</span>
              </a>
              <a class="ui-button ui-button--secondary" :href="publicPath('/materials')">
                <span>Учебные материалы</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppFooter />
      <CopyToast />
    </div>
  </main>
</template>