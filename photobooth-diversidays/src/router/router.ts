import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Webcam from '/src/views/Webcam.vue'
import EndScreen from '/src/views/EndScreen.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Webcam',
        name: 'Webcam',
        component: Webcam,
    },
    {
        path: '/EndScreen',
        name: 'EndScreen',
        component: EndScreen,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
