<script setup>
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from '@/components/UI/AppButton.vue'
// import { useTodosStore } from "@/store/TodosStore.js";
import AppCloseButton from "@/components/UI/AppCloseButton.vue";

// const store = useTodosStore();
const props = defineProps({
  isEditingModal: {
    type: Boolean,
    default: false,
  }
});
const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
};

// const store = useTodosStore();

</script>

<template>
  <div v-if="!props.isEditingModal" class="flex flex-col justify-between h-full">
    <div class="flex justify-between items-center">
      <h2 class="form-title">Задача на сегодня <span class="accent-green-500">[Создание]</span>
      </h2>
      <AppCloseButton @closeModal="closeModal" />
    </div>
    <form action="#" class="form flex flex-col justify-between gap-4">
      <div class="w-full flex flex-col gap-4">
        <label>Название</label>
        <AppInput  :value="''"/>
      </div>
      <div class="self-end flex gap-4 items-center">
        <AppButton  class="bg-green-600 hover:bg-green-500" text="Сохранить"/>
      </div>
    </form>
  </div>
  <div v-else class="flex flex-col justify-between h-full">
    <div class="flex justify-between items-center">
      <h2 class="form-title">Задача на сегодня <span class="accent-yellow-500">[Редактирование]</span>
      </h2>
      <AppCloseButton @closeModal="closeModal" />
    </div>
    <form action="#" class="form flex flex-col justify-between gap-4">
      <div class="w-full flex flex-col gap-4">
        <label>Название</label>
        <AppInput  :value="''"/>
      </div>
      <div class="self-end flex gap-4 items-center">
        <AppButton  class="bg-red-600 hover:bg-red-500" text="Удалить"/>
        <AppButton type="sumbit" class="bg-green-600 hover:bg-green-500" text="Сохранить"/>
      </div>
    </form>
  </div>
</template>

