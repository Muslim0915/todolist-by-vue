<script setup>
import AppForm from "@/components/AppForm.vue";
import {defineEmits, defineProps} from "vue";

const props = defineProps({
  isEditingModal: {
    type: Boolean,
    default: false,
  },
});

const inputValue = defineModel();
const emit = defineEmits(['closeModal', 'saveTodo', 'addTodo']);

const closeModal = () => {
  emit('closeModal');
};

const addTodo = () => {
  emit('addTodo')
}

const saveTodo = () => {
  emit('saveTodo')
}
</script>

<template>
  <div class="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
       @click.self="closeModal()">
    <div class="modal-container rounded-2xl p-8 bg-white w-1/3 h-1/3" @click.stop>
      <AppForm
          :isEditingModal="props.isEditingModal"
          @closeModal="closeModal()"
          @addTodo="addTodo()"
          @saveTodo="saveTodo()"
          v-model="inputValue"
      />
    </div>
  </div>
</template>

<style scoped>

</style>