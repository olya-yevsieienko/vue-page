<template>
    <div class="sidebar">
        <VSearch class="sidebar__search" />
        <SidebarList :list="sidebarData" />
    </div>
</template>

<script>
import SidebarList from '@/components/Sidebar/SidebarList.vue';
import sidebarData from '@/assets/models/sidebarData.js';

export default {
    name: 'TheSidebar',
    components: {
        SidebarList,
    },
    computed: {
        sidebarData() {
            return sidebarData;
        }
    },
};
</script>

<style lang="scss">
.sidebar {
    &__search {
        margin-bottom: 30px;
    }
}
</style>
