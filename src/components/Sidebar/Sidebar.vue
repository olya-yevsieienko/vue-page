<template>
    <div class="sidebar">
        <Search class="sidebar__search" />
        <SidebarList :list="listOptions" />
    </div>
</template>

<script>
import SidebarList from '@/components/Sidebar/SidebarList.vue';
import sidebarData from '@/assets/models/sidebarData.js';
import Search from '@/components/UI/Search.vue';

export default {
    components: {
        SidebarList,
        Search,
    },
    data() {
        return {
            listOptions: sidebarData,
        };
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
