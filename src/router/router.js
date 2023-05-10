import { createRouter, createWebHistory } from 'vue-router';
import CoursesPage from '@/pages/CoursesPage.vue';
import ServicesPage from '@/pages/ServicesPage.vue';
import BooksPage from '@/pages/BooksPage.vue';
import GoodsPage from '@/pages/GoodsPage.vue';

const routes = [
    { path: '/', redirect: '/courses' },
    { name: 'courses', path: '/courses', component: CoursesPage },
    { name: 'services', path: '/services', component: ServicesPage },
    { name: 'books', path: '/books', component: BooksPage },
    { name: 'goods', path: '/goods', component: GoodsPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
