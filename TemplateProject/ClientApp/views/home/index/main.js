import Vue from 'vue';
import App from './HomeIndexController.vue';
import { BootstrapVue } from "bootstrap-vue";

Vue.component('hello-world', () => import('../../../components/HelloWorld.vue'));
Vue.component('search-bar', () => import('../../../components/SearchBar.vue'));
Vue.component('filter-text', () => import('../../../components/FilterText.vue'));
Vue.component('school-table', () => import('../../../components/SchoolTable.vue'));

Vue.use(BootstrapVue);


const app = new Vue({
    el: '#app',
    render: h => h(App)
})
