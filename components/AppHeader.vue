<script setup lang="ts">
const publicPath = usePublicPath()

withDefaults(
  defineProps<{
    activePage?: 'home' | 'materials'
  }>(),
  {
    activePage: 'home'
  }
)
</script>

<template>
  <header id="top" class="site-header">
    <NuxtLink class="site-header__logo" to="/" aria-label="На главную">
      <img :src="publicPath('/images/logo-header.svg')" alt="ИжГТУ имени М. Т. Калашникова" />
    </NuxtLink>
    <nav class="site-header__menu" aria-label="Основная навигация">
      <NuxtLink class="site-header__menu-link" :class="{ 'is-active': activePage === 'home' }" to="/">
        Главная страница
      </NuxtLink>
      <NuxtLink
        class="site-header__menu-link"
        :class="{ 'is-active': activePage === 'materials' }"
        to="/materials"
      >
        Учебные материалы
      </NuxtLink>
    </nav>
    <CopyEmailButton variant="header" />
  </header>
</template>
