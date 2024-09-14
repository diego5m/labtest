## Steps

link de referencia: [organizacion salon](https://github.com/upc-pre-202401-si730-ws53)

eliminar carpetas y archivos innecesarios

eliminar todo lo de App.vue

refactor en src/App.vue a src/app.vue por convenciones

eliminar carpeta componentes

eliminar carpeta assets

links para trabajar

- newsapi.org

- primevue.org

- axios-http.com/docs.intro

- dashboard.clearbit.com/docs

Instalacion de Axios:

```bash
npm install axios
```

en src/ crear shared/services

en src/shared/services crear servicio api exmp: name-api.service | definir export class y baseUrl

para un bounded context:

- en src/'name' crear carpetas 'name'/components | 'name'/model | 'name'/services

bounded context del negocio src/'name'/model y crear la entidad entidad | 'name'.entity

en 'name'/services crear 'name'-api.services

## Instalacion de PrimeVue:

```bash
npm install primevue
```

## Instalar dependencias:

Instalacion de Prime icons:

```bash
npm install primeicons
```

```bash
npm install primeflex --save
```

## main.js

importar librerias en main.js para primevue y constructor

ejemplo

```javascript
import PrimeVue from "primevue/config";

// Application Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

// Icons
import 'primeicons/primeicons.css';

// PrimeFlex Support
import 'primeflex/primeflex.css';

// PrimeVue Components
import Card         from "primevue/card";
import Button       from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Avatar       from "primevue/avatar";
import Menu         from "primevue/menu";
import Menubar      from "primevue/menubar";
import Toolbar      from "primevue/toolbar";
import i18n from "./i18n.js";

// Application instance
const app = createApp(App);

// PrimeVue Setup
app.use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);

// i18n Setup
app.use(i18n);

// Application Component Mounting
app.mount('#app');
```

## Creacion de componente

ruta: src/news/components

'component name'.component

seleccionar options APi


