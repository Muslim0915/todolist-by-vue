<script setup>
import AppForm from "@/components/AppForm.vue";
import { defineProps, defineEmits } from "vue";

const isEditingModal =  defineProps({
  isEditingModal: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['closeModal']);

// const store = useTodosStore();

const closeModal = () => {
 emit('closeModal');
};
</script>

<template>
  <div class="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
       @closeModal="closeModal()" @click.self="closeModal()">
    <div class="modal-container rounded-2xl p-8 bg-white w-1/3 h-1/3" @click.stop>
      <AppForm :isEditingModal="isEditingModal.isEditingModal" />
    </div>
  </div>
</template>

<style scoped>

</style>