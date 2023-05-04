import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import { router } from '@/router/router';

const pinia = createPinia();
const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

app.use(pinia);
app.use(router);

app.mount('#app');
