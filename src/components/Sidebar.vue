<template>
    <div>
        <my-search class="search" />
        <sidebar-list :list="listOption" />
    </div>
</template>

<script>
import SidebarList from './SidebarList.vue';
import sidebarData from '../assets/helpers/sidebarData.json';

export default {
    components: {
        SidebarList,
    },
    data() {
        return {
            listOption: sidebarData,
        };
    },
};
</script>

<style scoped>
.search {
    margin-bottom: 30px;
}
</style>
