import { createApp } from "vue";
import App from "./App.vue";
import mock from "./mock";
import { createPinia } from "pinia";

mock.start()
createApp(App).use(createPinia()).mount('#app')
