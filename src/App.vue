<template>
    <div class="app">
        <Layout />
    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import '@/assets/styles/style.scss';

export default {
    components: {Layout}
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables.scss';

.app {
    font-family: 'NanoSans', sans-serif;
    font-size: 14px;
    min-height: 100vh;
    width: 100%;
    color: $main-text;
    background: $page-bgr;
}
</style>
