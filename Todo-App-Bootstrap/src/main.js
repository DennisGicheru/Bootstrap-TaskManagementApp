import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)