import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import 'flowbite';
import './css/style.css'

createApp(App).use(router).mount('#app')
