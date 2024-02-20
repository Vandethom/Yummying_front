import { createRouter, 
    createWebHistory, 
    RouteRecordRaw }   from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: { path: "/home" },
        children: [{
            path: "/home",
            name: "home",
            component: () => import('../views/Home.vue')
        }]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/dish/:id',
        name: 'dish',
        component: () => import('../views/Dish.vue')
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/Account.vue')
    },
    {
        path: '/reservation',
        name: 'reservation',
        component: () => import('../views/Reservation.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'pageNotFound',
        component: () => import('../views/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
