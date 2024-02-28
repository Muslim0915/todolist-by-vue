import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore('todos', () => {
    const todos = ref([
        { id: 1, text: 'Learn JS', completed: false },
        { id: 2, text: 'Learn Vue', completed: false },
        { id: 3, text: 'Learn React', completed: false },
    ]);
    const isModalShown = ref(false);
    const isEditingModal = ref(false);
    const inputValue = ref('');
    const editingTodo = ref(null); // Добавляем переменную для хранения редактируемой задачи

    const openCreateModal = () => {
        isModalShown.value = true;
        isEditingModal.value = false;
        inputValue.value = '';
        editingTodo.value = null; // Сбрасываем редактируемую задачу
    }

    const openEditModal = (todo) => {
        isModalShown.value = true;
        inputValue.value = todo.text; // Устанавливаем значение в поле ввода из редактируемой задачи
        editingTodo.value = todo; // Устанавливаем текущую редактируемую задачу
        isEditingModal.value = true;
    }

    const addTodo = () => {
        if (editingTodo.value) {
            // Если редактируемая задача существует, обновляем её текст
            editingTodo.value.text = inputValue.value;
            closeModal(); // Закрываем модальное окно после редактирования
        } else {
            // Иначе добавляем новую задачу в список
            todos.value.push({
                id: Date.now(),
                text: inputValue.value,
                completed: false
            });
        }
        inputValue.value = ''; // Сбрасываем значение поля ввода
    }

    const closeModal = () => {
        isModalShown.value = false;
        editingTodo.value = null; // Сбрасываем редактируемую задачу при закрытии модального окна
    }

    const updateInputValue = (value) => {
        inputValue.value = value;
    };
    const editTodo = () => {
        // if (editingTodo.value) {
        //     const editedTodoIndex = todos.value.findIndex(todo => todo.id === editingTodo.value.id);
        //     if (editedTodoIndex !== -1) {
        //         todos.value[editedTodoIndex].text = inputValue.value;
        //     }
        //     closeModal();
        // }
    }


    return {
        todos,
        isModalShown,
        isEditingModal,
        openModal: openCreateModal,
        closeModal,
        openEditModal,
        inputValue,
        addTodo,
        updateInputValue,
         editTodo
    }
});
