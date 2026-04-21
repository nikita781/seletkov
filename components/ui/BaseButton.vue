<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'secondary'
    state?: 'enabled' | 'hover' | 'disabled'
    icon?: boolean
  }>(),
  {
    variant: 'primary',
    state: 'enabled',
    icon: false
  }
)
</script>

<template>
  <a
    v-if="href"
    class="ui-button"
    :class="[`ui-button--${variant}`, `ui-button--${state}`, { 'ui-button--icon': icon }]"
    :href="href"
  >
    <EnvelopeIcon v-if="icon" />
    <span><slot>Кнопка</slot></span>
  </a>
  <button
    v-else
    class="ui-button"
    :class="[`ui-button--${variant}`, `ui-button--${state}`, { 'ui-button--icon': icon }]"
    :disabled="state === 'disabled'"
    type="button"
  >
    <EnvelopeIcon v-if="icon" />
    <span><slot>Кнопка</slot></span>
  </button>
</template>
