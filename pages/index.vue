<script setup lang="ts">
import { courseTabs, courses } from '~/data/courses'

useSeoMeta({
  title: 'Методология диссертационного исследования',
  description:
    'Главная страница курса Сергея Григорьевича Селеткова по методологии диссертационного исследования для магистрантов, аспирантов и докторантов.',
  ogTitle: 'Методология диссертационного исследования',
  ogDescription:
    'Курс Сергея Григорьевича Селеткова: лекции, подготовка диссертации и учебные материалы.',
  twitterTitle: 'Методология диссертационного исследования',
  twitterDescription:
    'Курс Сергея Григорьевича Селеткова по методологии диссертационного исследования.'
})
</script>

<template>
  <main class="landing-page">
    <div class="landing-page__shell">
      <AppHeader />
      <HeroSection />

      <section class="course-switcher" aria-label="Учебные материалы">
        <span id="mag" class="course-switcher__target" aria-hidden="true" />
        <span id="asp" class="course-switcher__target" aria-hidden="true" />
        <span id="doc" class="course-switcher__target" aria-hidden="true" />

        <div class="course-intro">
          <h2>Трейлер к курсу «Методология диссертационного исследования»</h2>
          <nav class="course-tabs" aria-label="Категории курса">
            <CategoryBanner
              v-for="tab in courseTabs"
              :id="tab.id"
              :key="tab.id"
              :active="tab.id === 'mag'"
              :href="`#${tab.id}`"
              :image="tab.image"
              :image-type="tab.imageType"
            >
              {{ tab.label }}
            </CategoryBanner>
          </nav>
        </div>

        <div class="course-panels">
          <CourseProgram v-for="course in courses" :key="course.id" :course="course" />
        </div>
      </section>

      <AppFooter />
      <CopyToast />
    </div>
  </main>
</template>
