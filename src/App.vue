<script setup>
import 'typeface-poppins';
import AppButton from "@/components/UI/AppButton.vue";
import {computed, defineAsyncComponent, ref} from "vue";
// import {useTodosStore} from '@/store/TodosStore.js'
import TodoItem from "@/components/TodoItem.vue";
import {useToast} from "vue-toastification";

const AppModal = defineAsyncComponent(() => import('@/components/AppModal.vue'));

const toast = useToast();


const inputValue = ref('');
const isEditingModal = ref(false);

const todos = [
  { id: 1, text: 'Learn JS', completed: false },
  { id: 2, text: 'Learn Vue', completed: false },
  { id: 3, text: 'Learn React', completed: false },
];

// const store = useTodosStore();

const openEditModal = (id) =>{
  isModalShown.value = true;
  isEditingModal.value = true;
  todos.map(todo => {
    if (todo.id === id) {
      inputValue.value = todo.text
      console.log(inputValue.value);
    }
  });
}
const isModalShown = ref(false);

const closeModal = () => {
  isModalShown.value = false;
};
const openCreateModal = () => {
  isModalShown.value = true;
  isEditingModal.value = false;
  inputValue.value = '';
};
const addTodo = computed(()=>{
  return ()=>{
    if (inputValue.value === '') {
      toast.error('You must fill the input')
    }
    else {
      todos.push({
        id: Date.now(),
        text: inputValue.value,
        completed: false
      });
      toast.success('Todo added')
      closeModal();
      inputValue.value = '';
    }
  }
})
const saveTodo = () =>{
  if (inputValue.value === '') {
    toast.error('You must fill the input')
  }
}


</script>

<template>
  <div class="app bg-blue-950 h-screen font-poppins">

    <AppModal
        v-if="isModalShown"
        :isEditingModal="isEditingModal"
        v-model:inputValue="inputValue"
        @addTodo="addTodo()"
        @saveTodo="saveTodo()"
        @closeModal="closeModal()"
        v-model="inputValue"
    />
    <div class="h-20 bg-black">
      <div class="container h-full mx-auto px-4 flex justify-between items-center">
        <div class="text-white text-3xl font-bold tracking-widest">TODOLIST</div>
        <AppButton class="border-white hover:bg-white hover:text-black" text="Создать" @click="openCreateModal"/>
      </div>
    </div>
    <main class="main my-8">
      <section>
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold tracking-widest text-white">Список задач</h1>
          <div class="flex justify-between items-center gap-4 flex-wrap mt-8">
            <TodoItem
                v-for="todo in todos"
                :key="todo.id"
                :title="todo.text"
                :id="todo.id"
                @editTodo="openEditModal(todo.id)"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
