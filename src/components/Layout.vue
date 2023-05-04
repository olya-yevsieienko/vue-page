<template>
    <div class="layout">
        <div class="layout__content">
            <Header />
            <main class="layout__main">
                <Sidebar />

                <div>
                    <slot />
                </div>
            </main>
        </div>
        <Footer class="layout__footer" />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Layout',
    components: {
        Header, 
        Sidebar, 
        Footer
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

