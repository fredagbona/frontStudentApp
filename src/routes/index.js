import { createRouter, createWebHistory } from "vue-router"
const Edit = () => import('../views/Edit.vue')
const Home = () => import('../views/Home.vue')
const New = () => import('../views/New.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/new',
        name: 'New',
        component: New
    },
    {
        path: '/edit/:matricule',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;