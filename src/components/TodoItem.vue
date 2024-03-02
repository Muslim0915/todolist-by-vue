<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
// import { useTodosStore } from "@/store/TodosStore.js";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
  }
});

const emit = defineEmits(['editTodo', 'todoCompleted']);
// const store = useTodosStore();

const editTodo = () => {
  emit('editTodo', props.id);
};

const todoCompleted = () => {
  emit('todoCompleted', props.id);
}

</script>
<template>
  <div class="flex justify-between items-center gap-4 w-1/4 bg-white p-4 rounded" :data-isCompleted="props.completed">
    <h3 :class="props.class">{{ title }}</h3>
    <div class="flex">
      <AppButton text="Done" class="border bg-green-500 hover:bg-green-400 transition" @click="todoCompleted()" />
      <AppButton class="border bg-yellow-500 hover:bg-yellow-400 transition" text="Edit" @click="editTodo()"/>
    </div>
  </div>
</template>
