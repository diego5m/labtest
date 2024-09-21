# install vue cli

```bash
npm install -g @vue/cli
```

# create project

open webstorm

select Vue.js

set location of project

Vue CLI: `npx create-vue`

select default

# install dependencies

```bash
npm install
```

```bash
npm i @primevue/themes
```

```bash
npm i @vue/cli
```

```bash
npm install axios
```

```bash
npm install primelfex
```

```bash
npm install primeicons
```

```bash
npm install primevue
```

#

most of components with `Options API`

# initial folder structure

```bash
├─ src  
   ├─ locales
   ├─ <domain-name>
   ├─ public
   ├─ shared
```

delete folder `components`

create file `style.css` and replace with the next content:

```css

:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}
a:hover {
    color: #535bf2;
}

body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
}

h1 {
    font-size: 3.2em;
    line-height: 1.1;
}

button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}
button:hover {
    border-color: #646cff;
}
button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

.card {
    padding: 2em;
}

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

@media (prefers-color-scheme: light) {
    :root {
        color: #213547;
        background-color: #ffffff;
    }
    a:hover {
        color: #747bff;
    }
    button {
        background-color: #f9f9f9;
    }
}

```



# main.js config

```javascript



```


# App.vue config

delete `setup`



```javascript



```

# language switcher

```bash
npm add vue-i18n
```

follow the nex structure:

```bash
├─ src  
│   ├─ locales
│   │   ├─ en.json
│   │   ├─ es.json
│   ├─ public
│   │   ├─ language-switcher.component.vue
│   │
│   │─ i18n.json
```

`en.json` content:
```

{
  "read-more": "Read more",
  "unavailable-news": "News service is unavailable now.",
  "authoring-phrase": {
    "intro": "Made with",
    "use": "using",
    "author": "by {brand} Developer Team"
  }
}

```

`es.json` content:
```

{
  "read-more": "Ver más",
  "unavailable-news": "Servicio de noticias no disponible en este momento.",
  "authoring-phrase": {
    "intro": "Hecho con",
    "use": "utilizando",
    "author": "por el Equipo de Desarrollo de {brand}"
  }
}

```

`i18n.json` content:
```javascript

import en from './locales/en.json';
import es from './locales/es.json';
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages: { en,es}
});
export default i18n;

```

language-switcher.component.vue
```javascript

<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}

</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages"
                    class="uppercase"/>
</template>

<style scoped>

</style>

```


# footer-content.component.vue config

```bash
├─ src  
│   ├─ public
│   │   ├─ footer-content.component.vue
```

replace the file content of `footer-content.component.vue`

```javascript

<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="grid bg-primary mt-4 p-4 align-content-start">
    
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>Copyright 2024. ACME Studio</p>
    </div>
    
    <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
      <p>
        {{ $t('authoring-phrase.intro')}} <i class="pi pi-heart"></i>
        {{ $t('authoring-phrase.use') }} <a href="https://primevue.org"
                                            target="_blank">PrimeVue</a>
        {{ $t('authoring-phrase.author', {brand: 'ACME'}) }}
      </p>
    </div>
    
  </div>

</template>

<style scoped>

</style>

```

for add in App.vue

```javascript

<script>
    import LanguajeSwitcher from "@/public/language-switcer.component.vue"
    import FooterContent from "@/public/footer-content.component.vue"
<script>

<template>
    
    <div>
        <footer-content>
    <div>        
    
<template>

```

# toolbar-content.component.vue

```javascript

```


```bash
npm install -g @vue/cli
```

