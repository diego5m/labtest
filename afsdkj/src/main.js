import { createApp } from 'vue'
import './style.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import i18n from "./i18n.js";
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";
import Drawer from "primevue/drawer";


const app =createApp(App)
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.component('pv-card', Card)
app.component('pv-button', Button)
app.component('pv-select-button', SelectButton)
app.component('pv-toolbar', Toolbar)
app.component('pv-drawer', Drawer);

app.use(i18n);
app.mount('#app')

