<template>
    <ul>
        <sidebar-list-item
            v-for="(item) in list"
            :key="item.id"
            :item="item"
        />
    </ul>
</template>

<script>
import SidebarListItem from './SidebarListItem.vue'
export default {
    components: { SidebarListItem },
    props: {
        list: {
            type: Array,
        }
    }
}
</script>

<style scoped></style>