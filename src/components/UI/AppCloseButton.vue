<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
};
</script>

<template>
  <button
      class="close-btn"
      type="button"
      @click="closeModal()"
  >
    <svg fill="none" height="32" viewBox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
      <rect fill="white" height="32" rx="8" width="32"/>
      <path clip-rule="evenodd" d="M8 7.06325L10.598 4.46522C10.8569 4.20634 11.2767 4.20634 11.5355 4.46522C11.7944 4.7241 11.7944 5.14384 11.5355 5.40272L8.9375 8.00076L11.5355 10.5988C11.7944 10.8577 11.7944 11.2774 11.5355 11.5363C11.2767 11.7952 10.8569 11.7952 10.598 11.5363L8 8.93826L5.40197 11.5363C5.14308 11.7952 4.72335 11.7952 4.46447 11.5363C4.20558 11.2774 4.20558 10.8577 4.46447 10.5988L7.0625 8.00076L4.46447 5.40272C4.20558 5.14384 4.20558 4.7241 4.46447 4.46522C4.72335 4.20634 5.14308 4.20634 5.40197 4.46522L8 7.06325Z"
            fill="#E04042"
            fill-rule="evenodd"/>
    </svg>
  </button>
</template>

<style scoped>

</style>