<template>
    <div class="page">
        <nav>
            <page-header />
        </nav>
        <main class="page__main">
            <sidebar />

            <section>
                <!-- <profession /> -->
            </section>
        </main>
    </div>
</template>

<script setup>
/**
 * @todo
 * Тут ты используешь алиасы путей, а в других компонентах нет.
 * Всё должно быть в едином стиле
 */
import PageHeader from '@/components/PageHeader.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<style scoped>
.page {
    padding: 32px 88px 0 22px;
    min-height: 100vh;
    width: 100%;
}
.page__main {
    display: grid;
    grid-template-columns: 230px 1fr;
    column-gap: 30px;
}
</style>
