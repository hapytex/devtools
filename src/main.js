import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { JsonTreeView } from "json-tree-view-vue3";
// import { definePreset } from '@primeuix/themes';

import '@/assets/styles.scss';
import 'primeflex/primeflex.css';
import {definePreset} from "@primeuix/themes";

const app = createApp(App);

const myPreset = definePreset(Aura, { semantic: { primary: { 50: '#fff', 100: '#fff', 200: '#fff', 300: '#fbf2cc', 400: '#f4da6d', 500: '#e9c012', 600: '#ba990e', 700: '#8a720b', 800: '#5b4b07', 900: '#2c2403', 950: '#000' } } })

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: myPreset,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);
app.use(JsonTreeView);

app.mount('#app');
