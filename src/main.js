import {createApp} from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import {createRouter, createWebHistory} from 'vue-router';
import {routes} from "@/router/router";
import 'primevue/resources/themes/aura-light-green/theme.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'test' ? import.meta.env.VITE_TEST_PATH : ''),
  routes: routes
});

createApp(App, {})
  .use(router)
  .use(PrimeVue)
  .mount('#app')
