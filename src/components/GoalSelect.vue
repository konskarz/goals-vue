<script setup>
import { computed } from "vue";
import apiClient from "../stores/api.client";

const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
  optionDisableId: {
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
const { data: options } = apiClient.read("/goals/");
function optionDisable(option) {
  return option.id === props.optionDisableId;
}
</script>

<template>
  <q-select
    v-model="model"
    :options="options"
    option-value="id"
    option-label="name"
    :option-disable="optionDisable"
    emit-value
    map-options
    clearable
    clear-icon="close"
    dropdown-icon="keyboard_arrow_down"
  />
</template>
