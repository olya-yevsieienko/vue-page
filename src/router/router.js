import { createRouter, createWebHistory } from 'vue-router';
import Courses from '@/pages/Courses.vue';
import Home from '@/pages/Home.vue';
import Services from '@/pages/Services.vue';
import Books from '@/pages/Books.vue';
import Goods from '@/pages/Goods.vue';

const routes = [
    { path: '/', redirect: '/courses' },
    { name: 'courses', path: '/courses', component: Courses },
    { name: 'services', path: '/services', component: Services },
    { name: 'books', path: '/books', component: Books },
    { name: 'goods', path: '/goods', component: Goods },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
