import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import {createRouter, createWebHistory} from 'vue-router';
import {routes} from "@/router/router";
import '/src/assets/styles/index.scss';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import "primeflex/primeflex.css";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'test' ? import.meta.env.VITE_TEST_PATH : ''),
  routes: routes
});

createApp(App, {})
  .use(router)
  .use(pinia)
  .use(PrimeVue)
  .use(ToastService)
  .component('Button', Button)
  .component('InputText', InputText)
  .component('Toast', Toast)
  .mount('#app')
