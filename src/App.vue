<script setup>
import 'typeface-poppins';
import AppButton from "@/components/UI/AppButton.vue";
import {computed, defineAsyncComponent, ref} from "vue";
// import {useTodosStore} from '@/store/TodosStore.js'
import TodoItem from "@/components/TodoItem.vue";
import {useToast} from "vue-toastification";
import AppSelect from "@/components/UI/AppSelect.vue";

const AppModal = defineAsyncComponent(() => import('@/components/AppModal.vue'));

const toast = useToast();

const editingElement = ref(null);


const inputValue = ref('');
const isEditingModal = ref(false);

const todos = ref([]);

todos.value = JSON.parse(localStorage.getItem("todos")) || [];

const saveDataToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

// const store = useTodosStore();
const openEditModal = (id) =>{
  isEditingModal.value = true;
  isModalShown.value = true;
  editingElement.value = id
  todos.value.map(todo => {
    if (todo.id === id) {
      inputValue.value = todo.text
    }
  });
}
const isModalShown = ref(false);

const closeModal = () => {
  isModalShown.value = false;
  editingElement.value = null;
};
const openCreateModal = () => {
  isModalShown.value = true;
  isEditingModal.value = false;
  inputValue.value = '';
};
const addTodo = (inputValue) => {
  todos.value.push({
        id: Date.now(),
    text: inputValue,
        completed: false
      });
      toast.success('Todo added')
      closeModal();
      saveDataToLocalStorage();
}


const saveTodo = (editingInputValue) => {
  const editingTodo = todos.value.find(todo => todo.id === editingElement.value)
  if(editingTodo) {
    editingTodo.text = editingInputValue;
    toast.success('Todo was updated')
  }
  closeModal();
  saveDataToLocalStorage();
}
const deleteTodo = () => {
  todos.value = todos.value.filter(todo => todo.id !== editingElement.value);
  toast.success('Todo was deleted');
  closeModal();
  saveDataToLocalStorage();
}

const todoCompleted = (id) => {
  todos.value.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
  })
  saveDataToLocalStorage();
}
const options = [
  {value: 'title', name: 'Sort by name'},
  {value: 'completed', name: 'Sort by completed'},
];

const selectedSort = ref('')

const sortedTodos = computed(() => {
 return [...todos.value].sort((a, b) => a[selectedSort]?.localeCompare(b[selectedSort]))
});

const handleSortUpdate = (value) => {
  selectedSort.value = value;
  console.log(selectedSort.value);
}
const deleteAllTodos = () => {
  if (todos.value.length === 0) return toast.info('Nothing to delete :)')
  todos.value = [];
  saveDataToLocalStorage();
  toast.success('Todos Deleted')
}

</script>

<template>
  <div class="app bg-blue-950 h-screen font-poppins">

    <AppModal
        v-if="isModalShown"
        :isEditingModal="isEditingModal"
        v-model="inputValue"
        @addTodo="addTodo($event)"
        @saveTodo="saveTodo($event)"
        @closeModal="closeModal()"
        @deleteTodo="deleteTodo()"
    />
    <div class="h-20 bg-black">
      <div class="container h-full mx-auto px-4 flex justify-between items-center">
        <div class="text-white text-3xl font-bold tracking-widest">TODOLIST</div>
        <AppButton class="border-white hover:bg-white hover:text-black uppercase tracking-widest" text="Create" @click="openCreateModal"/>
      </div>
    </div>
    <main class="main my-8">
      <section>
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between">
          <h1 v-if="todos.length > 0" class="text-3xl font-bold tracking-widest text-white uppercase">list of todos</h1>
          <h1 v-else class="text-3xl font-bold tracking-widest text-white uppercase">list of todos empty</h1>
            <div class="flex items-center gap-10">
              <AppButton text="Delete All" @click="deleteAllTodos()" class="bg-red-800 border-red-800 hover:bg-red-700" />
              <AppSelect
                  v-model="selectedSort"
                  :options="options"
                  @update:modelValue="handleSortUpdate($event)"
              />
            </div>
          </div>
          <div class="flex items-center gap-28 flex-wrap mt-8">
            <TodoItem
                v-for="todo in sortedTodos"
                :key="todo.id"
                :title="todo.text"
                :id="todo.id"
                :data-isCompleted="todo.completed"
                :class="todo.completed ? 'line-through text-gray-500' : ''"
                @editTodo="openEditModal($event)"
                @todoCompleted="todoCompleted($event)"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
