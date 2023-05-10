<template>
    <div class="layout">
        <div class="layout__content">
            <TheHeader />
            <main class="layout__main">
                <TheSidebar />

                <div>
                    <slot />
                </div>
            </main>
        </div>
        <TheFooter class="layout__footer" />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/Sidebar/TheSidebar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: 'TheLayout',
    components: {
        TheHeader, 
        TheSidebar, 
        TheFooter
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables';

.layout {
    width: 100%;

    &__content {
        min-height: calc(100vh - $footer-height);
    }
    
    &__main {
        margin-top: 22px;
        padding: 0 88px 0 22px;
        display: grid;
        grid-template-columns: 230px 1fr;
        column-gap: 30px;
    }
}
</style>

