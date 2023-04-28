<template>
    <div class="app">
        <!-- 
            @todo
            Если ты используешь самозакрывающиеся теги компонентов, то они должны быть
            в таком стиле <PageLayout />, как в react.
        -->
        <Layout />
    </div>
</template>

<script setup>
import Layout from '@/components/Layout.vue';
import '@/assets/styles/style.scss';
</script>

<style>
/**
    * @todo
    * Стили выносятся из компонентов в отдельные css файлы (для уменьшения простыни кода в файле)
    * исключение составляют совсем маленькие стилистические изменения компонентов,
    * которые нет смысла выносить (например: https://imgur.com/a/erjCvmt)
    * или стили ui компонентов, которые должны инкапсулировать в себе какие-то базовые стили
*/
</style>
