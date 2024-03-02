<script setup>
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from '@/components/UI/AppButton.vue'
// import { useTodosStore } from "@/store/TodosStore.js";
import AppCloseButton from "@/components/UI/AppCloseButton.vue";
import {useToast} from "vue-toastification";




// const store = useTodosStore();
const props = defineProps({
  isEditingModal: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['closeModal', 'saveTodo', 'addTodo', 'deleteTodo']);

const toast = useToast();

const inputValue = defineModel();
const closeModal = () => {
  emit('closeModal');
};

const addTodo = () => {
  if (inputValue.value.length===0){
    toast.error('You must fill the field')
  }
  else {
    emit('addTodo', inputValue.value)
    inputValue.value='';
  }
}

const saveTodo = () => {
  if (inputValue.value.length===0){
    toast.error('You must fill the field or delete it')
  }
  else {
    emit('saveTodo', inputValue.value)
    inputValue.value='';
  }
}
const deleteTodo = () =>{
  emit('deleteTodo')
}



// const store = useTodosStore();

</script>

<template>
  <div v-if="!props.isEditingModal" class="flex flex-col justify-between h-full">
    <div class="flex justify-between items-center">
      <h2 class="form-title">Todo for today <span class="text-green-500">[Creating]</span>
      </h2>
      <AppCloseButton @closeModal="closeModal()" />
    </div>
    <div class="form flex flex-col justify-between gap-4">
      <div class="w-full flex flex-col gap-4">
        <label>Name</label>
        <AppInput
            v-model="inputValue"
        />
      </div>
      <div class="self-end flex gap-4 items-center">
        <AppButton
            type="submit"
            class="bg-green-600 hover:bg-green-500"
            text="Save"
            @click="addTodo()"
        />
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col justify-between h-full">
    <div class="flex justify-between items-center">
      <h2 class="form-title">Todo for today <span class="text-yellow-500">[Editing]</span>
      </h2>
      <AppCloseButton @closeModal="closeModal()" />
    </div>
    <div class="form flex flex-col justify-between gap-4">
      <div class="w-full flex flex-col gap-4">
        <label>Name</label>
        <AppInput
        v-model="inputValue"
        />
      </div>
      <div class="self-end flex gap-4 items-center">
        <AppButton
            class="bg-red-600
            hover:bg-red-500"
            text="Delete"
            @click="deleteTodo()"
        />
        <AppButton
            type="sumbit"
            class="bg-green-600 hover:bg-green-500"
            text="Save"
            @click="saveTodo()"
        />
      </div>
    </div>
  </div>
</template>

