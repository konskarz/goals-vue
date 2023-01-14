<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <q-input
    v-model.number="model"
    type="number"
    min="0"
    :label="label"
    stack-label
  >
    <template #append>
      <q-btn
        round
        dense
        flat
        label="-10"
        @click="if (model >= 10) model -= 10;"
      />
      <q-btn round dense flat label="-1" @click="if (model > 1) model--;" />
      <q-btn round dense flat label="+1" @click="if (model < 100) model++;" />
      <q-btn
        round
        dense
        flat
        label="+10"
        @click="if (model < 90) model += 10;"
      />
    </template>
  </q-input>
</template>
