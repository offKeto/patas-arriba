import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
    { 
        path: '/',
        name: 'home',
        component: () => import("../views/Home.vue"), 
        meta: { title: "Inicio" } 
    },
    { 
        path: '/services',
        name: 'services',
        component: () => import("../views/Services.vue"), 
        meta: { title: "Servicios" } 
    },
    { 
        path: '/contact',
        name: 'contact',
        component: () => import("../views/Contact.vue"), 
        meta: { title: "Contacto" } 
    },
]});

router.beforeEach((to, _from, next) => {
    const baseTitle = "Patas arriba";

    document.title = to.meta.title ? `${to.meta.title} - ${baseTitle}` : baseTitle;

    next();
});

export default router;