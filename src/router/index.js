import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from '../components/HomeRoutes/HomeRoutes.vue'
import CategoriesRoutes from '../components/OtherComponents/Categories/CategoriesLayout/Categories.vue'
import CategoryDetail from '../components/OtherComponents/Categories/CategoriesLayout/CategoryDetail.vue'
import AnimationDemo from '../components/FramerAnimation/AnimationDemo.vue'

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
        props: true,
        // Add this to ensure proper component re-rendering
        beforeEnter: (to, from, next) => {
            // Force component re-render when slug changes
            if (from.params.slug !== to.params.slug) {
                next()
            } else {
                next()
            }
        }
    },
    {
        path: '/demo',
        name: 'AnimationDemo',
        component: AnimationDemo
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If there's a saved position (back/forward navigation), restore it
        if (savedPosition) {
            return savedPosition
        }
        
        // For new page navigation, scroll to top
        if (to.path !== from.path) {
            return { top: 0 }
        }
        
        // Default behavior
        return { top: 0 }
    }
})

export default router 