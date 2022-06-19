import Vue from 'vue'
import SearchBar from "../../../components/SearchBar.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);


const app = new Vue({
    el: '#app',
    render: h => h(SearchBar)
})
