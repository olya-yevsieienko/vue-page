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
import SortItem from '@/components/Cours/CoursSortItem.vue';

export default {
    name: 'CoursSorting',
    components: {
        SortItem
    },
    props: {
        sortTypes: {
            type: Array,
            required: true
        }
    }
};
</script>
