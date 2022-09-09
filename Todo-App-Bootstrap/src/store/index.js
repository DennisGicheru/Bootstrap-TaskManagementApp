import { createStore } from 'vuex';
import axios from 'axios'


export default createStore ({
    state: {
        todos: JSON.parse(localStorage.getItem("TODOS")) ? JSON.parse(localStorage.getItem("TODOS")) : [],
    },
    getters: {
        todos: state => {
            return state.todos
        }
    },
    actions: {
        async fetchTodos({commit}) {
            const data = await axios.get('https://tychak.github.io/')
            commit('fetchTodos', data.data)
        },
        async newTodo({commit}, todo) {
            commit('newTodos', todo)
        },
    },
    mutations: {
        fetchTodos(state, todos) {
            //state.todos = todos
            localStorage.setItem("TODOS", JSON.stringify(state.todos))
            state.todos = JSON.parse(localStorage.getItem("TODOS"))
        },
        newTodos(state, todo) {
            let todos= state.todos.concat(todo)
            localStorage.setItem("TODOS", JSON.stringify(todos))
            state.tasks = JSON.parse(localStorage.getItem(todos))
            console.log(todo)
        },
    },
    modules: {},

})