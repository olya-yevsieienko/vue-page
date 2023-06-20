<template>
    <div class="app">
        <TheLayout>
            <router-view></router-view>
        </TheLayout>
    </div>
</template>

<script>
import TheLayout from '@/components/TheLayout.vue';
import '@/assets/styles/style.scss';

export default {
    name: 'App',
    components: {
        TheLayout,
    }
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables';

.app {
    font-family: 'NanoSans', sans-serif;
    font-size: 14px;
    color: $gray--100;
    background: $gray--00;
}
</style>
