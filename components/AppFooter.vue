<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <NuxtLink class="site-footer__logo" to="/" aria-label="На главную">
        <img src="/images/logo-footer.svg" alt="ИжГТУ имени М. Т. Калашникова" />
      </NuxtLink>
      <nav class="site-footer__menu" aria-label="Навигация в подвале">
        <NuxtLink to="/">Главная страница</NuxtLink>
        <NuxtLink to="/materials">Учебные материалы</NuxtLink>
      </nav>
    </div>
    <div class="site-footer__bottom">
      <p>Все права защищены, 2026</p>
      <CopyEmailButton variant="footer" />
    </div>
  </footer>
</template>
