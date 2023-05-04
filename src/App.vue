<template>
    <div class="app">
        <Layout>
            <router-view :key="$route.path"></router-view>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import Courses from '@/pages/Courses.vue';
import courses from '@/assets/models/courses';
import '@/assets/styles/style.scss';

export default {
    name: 'App',
    components: {
        Layout,
        Courses,
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
