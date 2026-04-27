<script setup lang="ts">
const publicPath = usePublicPath()
const trailerUrl = 'https://rutube.ru/video/486e0f7c27957d2459750da4c59c9a8a/'
</script>

<template>
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-section__content">
      <h1 id="hero-title">Методология диссертационного исследования (МДИ)</h1>
      <div class="hero-section__info">
        <div>
          <p class="hero-section__name">Селетков Сергей Григорьевич</p>
          <p class="hero-section__text">
            Доктор технических наук, профессор, зав. кафедрой «Высшая математика»<br />
            Ижевского технического университета имени М. Т. Калашникова, г. Ижевск, Россия.<br />
            Специалист по методологии научного (диссертационного) исследования
          </p>
        </div>
        <a class="hero-trailer-link" :href="trailerUrl" target="_blank" rel="noopener noreferrer">
          <img class="hero-trailer-link__icon" :src="publicPath('/images/icon-presentation.svg')" alt="" />
          <span>Посмотреть трейлер к курсу</span>
        </a>
      </div>
    </div>
    <div class="hero-section__picture" aria-hidden="true">
      <img class="hero-section__pattern" :src="publicPath('/images/hero-pattern.png')" alt="" />
      <img class="hero-section__portrait" :src="publicPath('/images/seletkov.png')" alt="" />
    </div>
  </section>
</template>
