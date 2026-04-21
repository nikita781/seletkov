<script setup lang="ts">
import type { CourseId } from '~/data/courses'

const publicPath = usePublicPath()

withDefaults(
  defineProps<{
    id: CourseId
    href: string
    image: string
    imageType: 'master' | 'aspirant' | 'doctor'
    active?: boolean
  }>(),
  {
    active: false
  }
)
</script>

<template>
  <a
    class="category-banner"
    :class="[
      `category-banner--${id}`,
      `category-banner--image-${imageType}`,
      { 'is-active': active }
    ]"
    :href="href"
  >
    <span class="category-banner__text"><slot /></span>
    <span class="category-banner__image" aria-hidden="true">
      <img :src="publicPath(image)" alt="" loading="eager" />
    </span>
  </a>
</template>
