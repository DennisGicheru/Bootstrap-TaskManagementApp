import { createStore } from 'vuex';
import axios from 'axios'


export default createStore ({
    state: {
        //todos: [],
        todos: JSON.parse(localStorage.getItem("TODOS2")) ? JSON.parse(localStorage.getItem("TODOS2")) : [],
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
        async editTodo({commit}, id) {
            commit('editTodos', {id})
        }
    },
    mutations: {
        fetchTodos(state, todos) {
            state.todos = todos
            localStorage.setItem("TODOS2", JSON.stringify(state.todos))
            state.todos = JSON.parse(localStorage.getItem("TODOS2"))
        },
        newTodos(state, todo) {
            let todos= state.todos.concat(todo)
            localStorage.setItem("TODOS2", JSON.stringify(todos))
            state.tasks = JSON.parse(localStorage.getItem(todos))
            console.log(todo)
        },
        editTodos(state, {id}) {
            //state.todos = todos
            var editTodo = JSON.parse(localStorage.getItem("TODOS2"))
            for (var i = 0; i < editTodo.length; i++) {
                if(editTodo[i].id == id) {
                    editTodo = state.todos
                }
            }
            localStorage.setItem("TODOS2", JSON.stringify(editTodo))
        }
    },
    modules: {},

})