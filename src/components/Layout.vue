<template>
    <div class="layout">
        <Header />
        <main class="layout__main">
            <Sidebar />

            <section>
                <Profession :profession="profession" />
            </section>
        </main>
    </div>
</template>

<script>
/**
 * @todo
 * Тут ты используешь алиасы путей, а в других компонентах нет.
 * Всё должно быть в едином стиле
 */
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Profession from '@/components/Profession.vue';
import profession from '@/assets/models/profession';

export default {
    components: { Header, Sidebar, Profession },
    // change for data from the route
    computed: {
        profession() {
            return profession[0];
        }
    } 
}
</script>

<style lang="scss">
.layout {
    &__main {
        display: grid;
        grid-template-columns: 230px 1fr;
        column-gap: 30px;
    }
}
</style>

