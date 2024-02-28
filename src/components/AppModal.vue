<script setup>


import AppForm from "@/components/AppForm.vue";
import {useTodosStore} from "@/store/TodosStore.js";
</script>

<template>
  <div class="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
       @click="useTodosStore().closeModal()" @click.self="useTodosStore().closeModal()">
    <div class="modal-container rounded-2xl p-8 bg-white w-1/3 h-1/3" @click.stop>
      <AppForm />
    </div>
  </div>
</template>

<style scoped>

</style>