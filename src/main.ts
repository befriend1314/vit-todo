import { createApp } from 'vue'
import App from './App.vue'

import mock from "./mock"
mock.start()

createApp(App).mount('#app')
