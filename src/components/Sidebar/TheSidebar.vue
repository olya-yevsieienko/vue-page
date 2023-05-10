<template>
    <div class="sidebar">
        <VSearch class="sidebar__search" />
        <SidebarList :list="listOptions" />
    </div>
</template>

<script>
import SidebarList from '@/components/Sidebar/SidebarList.vue';
import sidebarData from '@/assets/models/sidebarData.js';
import VSearch from '@/components/UI/VSearch.vue';

export default {
    name: 'TheSidebar',
    components: {
        SidebarList, VSearch,
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    created() {
        this.listOptions = sidebarData;
    }
};
</script>

<style lang="scss">
.sidebar {
    &__search {
        margin-bottom: 30px;
    }
}
</style>
