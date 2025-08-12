import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from '../components/HomeRoutes/HomeRoutes.vue'
import CategoriesRoutes from '../components/OtherComponents/Categories/CategoriesLayout/Categories.vue'
import CategoryDetail from '../components/OtherComponents/Categories/CategoriesLayout/CategoryDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeRoutes
    },
    {
        path: '/categories',
        name: 'Categories',
        component: CategoriesRoutes
    },
    {
        path: '/categories/:slug',
        name: 'CategoryDetail',
        component: CategoryDetail,
        props: true
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