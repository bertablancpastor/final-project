<template>


    <div class="task-item">
       <h3 v-bind:class="task.is_complete ? 'completed' : 'not-completed'">{{task.title}}</h3>
       <p v-bind:class="task.is_complete ? 'completed' : 'not-completed'">{{task.description}}</p>
    
     <div class="buttons-task-item">
       <button @click="deleteTask" class="buttons-1" title="Delete"></button>
       <button @click="editTaskFunction" class="buttons-2" title="Edit"></button>   
       <button @click="statusTask" class="buttons-3" title="Done"></button>
     </div>

     <div v-show="editTask" class="edit-task">
           <input class="input-edit" type="text" placeholder="Edit Title" v-model="name" />
           <input class="input-edit" type="text" placeholder="Edit Description" v-model="description">
               
           <button @click="changeTask" class="button-change">Change</button>
     </div>

    </div>


</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/task';
import { supabase } from '../supabase';

const taskStore = useTaskStore();

const emit = defineEmits(['getTasksHijo']);

// variables para los valors de los inputs
const name = ref(props.task.title);
const description = ref(props.task.description);

const props = defineProps({
    task: Object,
});

// Función para borrar la tarea a través de la store. El problema que tendremos aquí (y en NewTask.vue) es que cuando modifiquemos la base de datos los cambios no se verán reflejados en el v-for de Home.vue porque no estamos modificando la variable tasks guardada en Home. Usad el emit para cambiar esto y evitar ningún page refresh.
const deleteTask = async() => {
    await taskStore.deleteTask(props.task.id);

    emit ('getTasksHijo');
};

// Funcion editar task
const changeTask = async () => {
    await taskStore.changeTask(name.value, description.value, props.task.id);
    editTask.value = false;
    
    emit ('getTasksHijo');
};

const editTask = ref(false);
const editTaskFunction = () => {
    editTask.value = !editTask.value;
};

// Funcion archivar task
const statusTask = async () => {
    await taskStore.statusTask(!props.task.is_complete, props.task.id);
    emit ('getTasksHijo');
    console.log("El registro del booleano es "+props.task.is_complete)
};



</script>

<style scoped>


</style>

