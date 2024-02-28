<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:value']);

const updateValue = (value) => {
  emit('update:value', value);
};
</script>

<template>
  <input
      :value="props.value"
      class="w-full border border-gray-500 rounded p-2 outline-0"
      placeholder="Введите текст"
      type="text"
      @input="updateValue($event.target.value)"
  />
</template>

<style scoped>

</style>
