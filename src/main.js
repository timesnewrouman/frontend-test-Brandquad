import {createApp} from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import {createRouter, createWebHistory} from 'vue-router';
import {routes} from "@/router/router";
import '/src/assets/styles/index.scss';
// import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import "primeflex/primeflex.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'test' ? import.meta.env.VITE_TEST_PATH : ''),
  routes: routes
});

createApp(App, {})
  .use(router)
  .use(PrimeVue)
  .component('Button', Button)
  .component('InputText', InputText)
  .mount('#app')
