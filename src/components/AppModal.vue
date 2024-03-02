<script setup>
import AppForm from "@/components/AppForm.vue";
import {defineEmits, defineProps, ref} from "vue";

const props = defineProps({
  isEditingModal: {
    type: Boolean,
    default: false,
  },
});

const inputValue = defineModel();
const emit = defineEmits(['closeModal', 'saveTodo', 'addTodo', 'deleteTodo']);

const closeModal = () => {
  emit('closeModal');
};

const addTodo = (inputValue) => {
  emit('addTodo', inputValue)
}

const saveTodo = (inputValue) => {
  emit('saveTodo', inputValue)
}
const deleteTodo = () => {
  emit('deleteTodo')
}
</script>

<template>
  <div
      class="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
       @click.self="closeModal()
">
    <div class="modal-container rounded-2xl p-8 bg-white w-1/3 h-1/3" @click.stop>
      <AppForm
          :isEditingModal="props.isEditingModal"
          @closeModal="closeModal()"
          @addTodo="addTodo($event)"
          @saveTodo="saveTodo($event)"
          @deleteTodo="deleteTodo()"
          v-model="inputValue"
      />
    </div>
  </div>
</template>