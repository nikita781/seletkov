<script setup lang="ts">
import type { Course } from '~/data/courses'

defineProps<{
  course: Course
}>()
</script>

<template>
  <section class="course-panel" :class="`course-panel--${course.id}`" :aria-labelledby="`${course.id}-title`">
    <div class="program-section">
      <div class="program-section__inner">
        <div class="program-section__head">
          <h2 :id="`${course.id}-title`">{{ course.title }}</h2>
          <CopyEmailButton variant="secondary" />
        </div>
        <div class="program-section__list">
          <LectureCard v-for="item in course.lectures" :key="`${course.id}-${item.number}`" :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>
