<script setup lang="ts">
const publicPath = usePublicPath()
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
        <CopyEmailButton />
      </div>
    </div>
    <div class="hero-section__picture" aria-hidden="true">
      <img class="hero-section__pattern" :src="publicPath('/images/hero-pattern.png')" alt="" />
      <img class="hero-section__portrait" :src="publicPath('/images/seletkov.png')" alt="" />
    </div>
  </section>
</template>
