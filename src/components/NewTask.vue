<template>
<div class="new-task">

    <h1 class="title-new-task">Add a new Task</h1>
    <div v-if="showErrorMessage">
        <p class="error-text">{{ errorMessage }}</p>
    </div>
    <div class="new-task-fields">
        <div class="input-field-new-task">
            <input type="text" placeholder="Add a Task Title..." class="input-field-new-task" v-model="name">
        </div>
        <div class="input-field-new-task">
            <textarea type="text" placeholder="Add a Task Description..." class="input-field-new-task" v-model="description"></textarea>
        </div>
        <button class="button-add-task" @click="addTask">Add</button>
    </div>

</div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task"   

const taskStore = useTaskStore();

const emit = defineEmits(['getTasksHijo']);
// variables para los valors de los inputs
const name = ref('');
const description = ref('');

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);

// Arrow function para crear tareas.
const addTask = async() => {
if(name.value.length === 0 || description.value.length === 0){
// Primero comprobamos que ningún campo del input esté vacío y lanzamos el error con un timeout para informar al user.

    showErrorMessage.value = true;
    errorMessage.value = 'The Task title or description is empty!';
    setTimeout(() => {
    showErrorMessage.value = false;
    }, 5000);

} else {
// Aquí mandamos los valores a la store para crear la nueva Task. Esta parte de la función tenéis que refactorizarla para que funcione con emit y el addTask del store se llame desde Home.vue.

    await taskStore.addTask(name.value, description.value);
    name.value = '';
    description.value = ''; 

    emit ('getTasksHijo');
}

};



</script>

<style></style>
  