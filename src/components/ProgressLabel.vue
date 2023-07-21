<script setup>
defineProps({
  value: { type: Number, required: true },
  color: { type: String, default: null },
  label: { type: String, default: null },
  hint: { type: String, default: null },
  labelIcon: { type: String, default: null },
  hintIcon: { type: String, default: null }
})
</script>

<template>
  <q-item-label>
    <div v-if="label" class="row items-center q-mb-xs">
      <q-icon v-if="labelIcon" :name="labelIcon" class="q-mr-sm" />
      {{ label }}
    </div>
    <q-linear-progress :value="value" :color="color" />
    <div v-if="hint" class="row items-center q-mt-xs">
      <q-icon v-if="hintIcon" :name="hintIcon" class="q-mr-sm" />
      {{ hint }}
    </div>
  </q-item-label>
</template>
