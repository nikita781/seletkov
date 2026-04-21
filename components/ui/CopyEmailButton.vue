<script setup lang="ts">
import { email } from '~/data/courses'

withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'header' | 'footer'
  }>(),
  {
    variant: 'primary'
  }
)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    const field = document.createElement('textarea')
    field.value = email
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    document.execCommand('copy')
    document.body.removeChild(field)
  }

  window.dispatchEvent(
    new CustomEvent('copy-toast', {
      detail: { message: 'Текст скопирован' }
    })
  )
}
</script>

<template>
  <button
    class="copy-email"
    :class="`copy-email--${variant}`"
    type="button"
    aria-label="Скопировать почту"
    @click="copyEmail"
  >
    <EnvelopeIcon />
    <span>{{ email }}</span>
  </button>
</template>
