<script setup>
defineProps({
  label: { type: String, required: true }
})
</script>

<template>
  <q-expansion-item default-opened hide-expand-icon>
    <template #header>
      <q-item-section>
        <q-item-label overline class="q-px-sm text-uppercase">{{ label }}</q-item-label>
      </q-item-section>
    </template>
    <slot />
  </q-expansion-item>
</template>
