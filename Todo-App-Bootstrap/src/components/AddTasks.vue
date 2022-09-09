<template>
  <div>
    <form @submit="onSubmit">
        <h2>Enter Task Details</h2>
        <div>
            <label for="">Title: <input type="text" v-model="todo.title"/></label>
            <label>Description: <input type="text" v-model="todo.description"/></label>
            <label>Date added: <input type="date" v-model="todo.date_added"/></label>
            <label>Date completed: <input type="date" v-model="todo.date_completed"/></label>
            <label>Deadline: <input type="date" v-model="todo.deadline"/></label>
            <div>
                <button type="submit">Submit</button>
                <button>Cancel</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
let arrayFromStorage = JSON.parse(localStorage.getItem("TODOS2"))
let arrayLength = arrayFromStorage.length
arrayLength = JSON.stringify(++arrayLength)
export default {
    setup() {
        return {
        }
    },
    data() {
        return {
            showmodal: false,
            todo: {
                id: arrayLength,
                title: "",
                description: "",
                date_added: new Date().toISOString().slice(0,10),
                date_completed: new Date().toISOString().slice(0,10),
                deadline: new Date().toISOString().slice(0,10),
            }
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch("newTodo", this.todo)
        }
    }
}



</script>

<style>

</style>