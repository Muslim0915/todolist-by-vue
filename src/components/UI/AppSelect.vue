<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);

const selectedOption = ref(props.modelValue);
const changeOption = () => {
  emit('update:modelValue', selectedOption.value);
};
</script>

<template>
  <select @change="changeOption" v-model="selectedOption" class="border border-gray-500 rounded p-2 outline-0">
    <option disabled value="">Choose an option</option>
    <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
