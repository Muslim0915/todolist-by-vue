<script setup>
import 'typeface-poppins';
import AppButton from "@/components/UI/AppButton.vue";
import AppModal from "@/components/AppModal.vue";
import {ref} from "vue";
import {useTodosStore} from '@/store/TodosStore.js'
import TodoItem from "@/components/TodoItem.vue";

const store = useTodosStore();

const openModal = () => {
  store.openModal();
};

const closeModal = () => {
  store.closeModal();
};


</script>

<template>
  <div class="app bg-blue-950 h-screen font-poppins">

    <AppModal v-if="store.isModalShown" @closeModal="closeModal"/>
    <div class="h-20 bg-black">
      <div class="container h-full mx-auto px-4 flex justify-between items-center">
        <div class="text-white text-3xl font-bold tracking-widest">TODOLIST</div>
        <AppButton class="border-white hover:bg-white hover:text-black" text="Создать" @click="openModal"/>
      </div>
    </div>
    <main class="main my-8">
      <section>
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold tracking-widest text-white">Список задач</h1>
          <div class="flex justify-between items-center gap-4 flex-wrap mt-8">
            <TodoItem
                v-for="todo in store.todos"
                :key="todo.id"
                :title="todo.text"
                :id="todo.id"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
