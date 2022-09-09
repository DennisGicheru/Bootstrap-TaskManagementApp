<template>
  <div>
    <form @submit="onSubmit(todo.id)">
        <h1>Edit To-DO</h1>
        <div>
            <label>Title: <input type="text" v-model="todo.title"></label>
            <label>Title: <input type="text" v-model="todo.description"></label>
            <label>Title: <input type="text" v-model="todo.date_added"></label>
            <label>Title: <input type="text" v-model="todo.date_completed"></label>
            <label>Title: <input type="text" v-model="todo.deadline"></label>

        </div>
        <div>
            <button type="submit">Update</button>
        </div>
    </form>
  </div>
</template>

<script>

export default {
    setup() {
        return {}
    },
    data() {
        return {}
    },
    computed: {
        todo(){
           return this.$store.state.todos.find(t => t.id == this.$route.params.id) 
        }
    },
    methods: {
        onSubmit(id){
            this.$store.dispatch('editTodo', {id}).then(() => {
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>

</style>