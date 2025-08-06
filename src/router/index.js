import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from '../components/HomeRoutes/HomeRoutes.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeRoutes
    },
    //   {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../components/About/About.vue')
    //   },
    //   {
    //     path: '/services',
    //     name: 'Services',
    //     component: () => import('../components/Services/Services.vue')
    //   },
    //   {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: () => import('../components/Contact/Contact.vue')
    //   }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 