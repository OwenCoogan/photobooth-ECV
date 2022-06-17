import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Webcam from '/src/views/Webcam.vue'
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
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
