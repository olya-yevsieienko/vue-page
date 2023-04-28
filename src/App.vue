<template>
    <div class="app">
        <!-- 
            @todo
            Если ты используешь самозакрывающиеся теги компонентов, то они должны быть
            в таком стиле <PageLayout />, как в react.
        -->
        <page-layout />
    </div>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue';
</script>

<style>
/**
    * @todo
    * Стили выносятся из компонентов в отдельные css файлы (для уменьшения простыни кода в файле)
    * исключение составляют совсем маленькие стилистические изменения компонентов,
    * которые нет смысла выносить (например: https://imgur.com/a/erjCvmt)
    * или стили ui компонентов, которые должны инкапсулировать в себе какие-то базовые стили
*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --page-bgr: #f5f6f8;
    --main-text: #3b434e;
    --secondary-text: #787d85;
    --search: #a4a4a4;
    --border: #dfdfdf;
    --violet: #7653fc;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    --border-radius: 5px;
}

@font-face {
    font-family: 'NanoSans';
    src: local('NanoSans'), url('/src/assets/fonts/NotoSans.ttf') format('truetype');
}

.app {
    font-family: 'NanoSans', sans-serif;
    font-size: 14px;
    color: var(--main-text);
    background: var(--page-bgr);
}
</style>
