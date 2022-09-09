<template>
  <div class="mainpage">
    <h1>Welcome to your Task Manager</h1>
    <div>
        <button @click="showmodal =true">Add To-Do</button>
        <h2>Current To-Do's</h2>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Added</th>
                    <th>Date Completed</th>
                    <th>Deadline</th>
                    <th>Action</th>
                    <th>Action</th>
                    <th>Completion Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{todo.id}}</td>            
                    <td>{{todo.title}}</td>
                    <td>{{todo.description}}</td>
                    <td>{{todo.date_added}}</td>
                    <td>{{todo.deadline}}</td>
                    <td>{{todo.date_completed}}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
            </tbody>
        </table>
        <AddTasks v-show="showmodal"/>
    </div>
    
   </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import {useStore} from 'vuex';
import AddTasks from './AddTasks.vue';

const store = useStore()

const todos = computed(() => {
    return store.state.todos
})

onMounted(() => {
    store.dispatch('fetchTodos')
})

const showmodal = ref(false);


</script>

<style>

</style>