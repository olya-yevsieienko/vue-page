<template>
    <div class="app">
        <Layout>
            <router-view></router-view>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import courses from '@/assets/models/courses';
import '@/assets/styles/style.scss';

export default {
    name: 'App',
    components: {
        Layout,
    },
    created() {
        this.courses = courses;
    }
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables.scss';

.app {
    font-family: 'NanoSans', sans-serif;
    font-size: 14px;
    color: $gray--100;
    background: $gray--00;
}
</style>
