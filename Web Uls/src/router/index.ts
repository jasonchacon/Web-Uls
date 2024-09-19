import { createRouter, createWebHistory } from 'vue-router';

import PrincipalPagina from '@/modules/landing/pages/PrincipalPagina.vue';

export const router = createRouter({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: 'PrincipalPagina',
            component: PrincipalPagina,
        },
        {
            path: '/ContactoPagina',
            name: 'ContactoPagina',
            component: () => import ('@/modules/landing/pages/ContactoPagina.vue')
        },
        {
            path: '/PreciosPagina',
            name: 'PreciosPagina',
            component: () => import ('@/modules/landing/pages/PreciosPagina.vue')
        },
        {
            path: '/FeaturesPagina',
            name: 'FeaturesPagina',
            component: () => import ('@/modules/landing/pages/FeaturesPagina.vue')
        }
    ]
});

export default router;  // Asegúrate de exportar por defecto