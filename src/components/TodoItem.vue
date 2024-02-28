<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import { useTodosStore } from "@/store/TodosStore.js";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const store = useTodosStore();

const editTodo = () => {
  store.openEditModal(props.id);
};
</script>
<template>
  <div class="flex justify-between items-center gap-4 w-1/4 bg-white p-4 rounded">
    <h3>{{ title }}</h3>
    <AppButton class="border bg-yellow-500 hover:bg-yellow-400 transition" text="Изменить" @click="editTodo" />
  </div>
</template>
