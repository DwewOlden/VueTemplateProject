import Vue from 'vue';
import App from './HomeIndexController.vue';
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);


const app = new Vue({
    el: '#app',
    render: h => h(App)
})
