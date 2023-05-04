<template>
    <div class="sorting">
        <SortItem
            v-for="item in sortTypes"
            :key="item.id"
            :sortItem="item"
        />
    </div>
</template>

<script>
import SortItem from '@/components/SortItem.vue';

export default {
    name: 'Sorting',
    components: {
        SortItem
    },
    props: {
        sortTypes: {
            type: Array,
        }
    }
};
</script>
