<template>
    <div
        class="sort"
        :class="{
            'sort--active': activeLink
        }"
        @click="handleSelect(sortItem.name)"
    >
        <img
            v-show="activeLink"
            class="sort__image"
            :class="{
                'sort__image--desc': sortOrder === 'desc'
            }"
            src="src/assets/image/sort.svg"
            @click.stop="handleChangeSortOrder"
        >
        <span class="sort__name">{{ sortItem.title }}</span>
    </div>
</template>

<script>
import { useCoursesStore } from '@/stores/CoursesStore';

export default {
    name: 'SortItem',
    props: {
        sortItem: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            activeType: '',
            sortOrder: 'asc',
        };
    },
    setup() {
        const coursesStore = useCoursesStore();

        return { coursesStore };
    },
    methods: {
        handleSelect(type) {
            this.activeType = this.activeType === type ? '' : type;
            this.sortOrder = 'asc'
            this.coursesStore.selectSortType(this.activeType);
            this.coursesStore.selectSortOrder('asc');
        },
        handleChangeSortOrder() {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            this.coursesStore.selectSortOrder(this.sortOrder);
        },
    },
    computed: {
        activeLink() {
            return this.coursesStore.sorting.type === this.sortItem.name;
        }
    } 
};
</script>
