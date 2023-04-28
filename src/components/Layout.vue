<template>
    <div class="app">
        <Header />
        <main class="app__main">
            <Sidebar />

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
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
</script>

