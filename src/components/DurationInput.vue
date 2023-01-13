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
    :label="label"
    step="15"
    stack-label
  >
    <template #append>
      <q-btn
        round
        dense
        flat
        label="-60"
        @click="if (model >= 60) model -= 60;"
      />
      <q-btn
        round
        dense
        flat
        label="-15"
        @click="if (model >= 15) model -= 15;"
      />
      <q-btn round dense flat label="+15" @click="model += 15" />
      <q-btn round dense flat label="+60" @click="model += 60" />
    </template>
  </q-input>
</template>
