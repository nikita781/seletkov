<script setup lang="ts">
import type { LectureItem, LinkableText } from '~/data/courses'

defineProps<{
  item: LectureItem
}>()

const getText = (value: LinkableText) => (typeof value === 'string' ? value : value.text)
const getHref = (value: LinkableText) => (typeof value === 'string' ? undefined : value.href)
</script>

<template>
  <component
    :is="item.href ? 'a' : 'article'"
    class="lecture-card"
    :class="{ 'lecture-card--link': item.href, 'lecture-card--chapter': item.bulletTone === 'topics' }"
    :href="item.href"
    :target="item.href ? '_blank' : undefined"
    :rel="item.href ? 'noopener noreferrer' : undefined"
  >
    <div class="lecture-card__number">{{ item.number }}</div>
    <div class="lecture-card__content">
      <p v-if="item.title" class="lecture-card__title">{{ item.title }}</p>
      <p v-for="(line, index) in item.lines" :key="`line-${index}`" class="lecture-card__line">
        {{ getText(line) }}
      </p>
      <ul
        v-if="item.bullets?.length"
        class="lecture-card__list"
        :class="`lecture-card__list--${item.bulletTone || 'body'}`"
      >
        <li v-for="(bullet, index) in item.bullets" :key="`bullet-${index}`" class="lecture-card__topic">
          <a
            v-if="getHref(bullet)"
            class="lecture-card__topic-link"
            :href="getHref(bullet)"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ getText(bullet) }}
          </a>
          <span v-else class="lecture-card__topic-text">{{ getText(bullet) }}</span>
        </li>
      </ul>
    </div>
  </component>
</template>
