import { createRouter, createWebHistory } from 'vue-router';
import Courses from '@/pages/Courses.vue';
import Home from '@/pages/Home.vue';
import Services from '@/pages/Services.vue';
import Books from '@/pages/Books.vue';
import Goods from '@/pages/Goods.vue';

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'courses', path: '/курсы', component: Courses },
    { name: 'services', path: '/сервисы', component: Services },
    { name: 'books', path: '/книги', component: Books },
    { name: 'goods', path: '/товары', component: Goods },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
