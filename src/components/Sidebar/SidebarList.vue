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
    components: {SidebarItem},
    props: {
        list: {
            type: Array,
        },
    },
};
</script>
