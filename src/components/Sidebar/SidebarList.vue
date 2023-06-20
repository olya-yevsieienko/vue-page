<template>
    <ul class="sidebar-list">
        <SidebarItem
            v-for="item in list"
            :key="item.id"
            :item="item"
            class="sidebar-list__item"
        />
    </ul>
</template>

<script>
import SidebarItem from '@/components/Sidebar/SidebarItem.vue';

export default {
    name: 'SidebarList',
    components: {
        SidebarItem
    },
    props: {
        list: {
            type: Array,
            required: true
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar-list {
    &__item {
        &:not(:first-child) {
            margin-top: 20px;
        }
    }
}
</style>
