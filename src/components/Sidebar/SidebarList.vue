<template>
    <ul>
        <SidebarItem
            v-for="item in list"
            :key="item.id"
            :item="item"
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
