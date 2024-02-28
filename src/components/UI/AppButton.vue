<script setup>

const props = defineProps({
  text: {
    type: String,
  }
})

</script>

<template>
  <button class="border  text-white rounded p-2 transition">

    {{ props.text }}
  </button>
</template>

<style scoped>

</style>