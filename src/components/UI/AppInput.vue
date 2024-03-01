<script setup>
// const props = defineProps({
//   value: {
//     type: String,
//     required: true,
//   },
// });
const inputValue = defineModel();
</script>

<template>
  <input
      v-model="inputValue"
      class="w-full border border-gray-500 rounded p-2 outline-0"
      placeholder="Введите текст"
      type="text"
  />
</template>

<style scoped>

</style>
