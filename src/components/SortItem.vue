<template>
    <div
        class="sort"
        :class="{
            'sort--active': isActive,
        }"
        @click="handleSelect"
    >
        <div class="sort__image-wrap">
            <span
                class="sort__image"
                :class="{
                    'sort__image--desc': sortDirection === 'desc',
                }"
                @click.stop="handleChangeSortDirection"
            />
        </div>
        <span class="sort__name">{{ sortItem.title }}</span>
    </div>
</template>

<script>
import { useCoursesStore } from '../stores/CoursesStore';

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
            isActive: false,
            sortDirection: 'asc',
        };
    },
    setup() {
        const coursesStore = useCoursesStore();

        return { coursesStore };
    },
    methods: {
        handleSelect() {
            this.isActive = !this.isActive;

            if (this.isActive) {
                this.sortDirection = 'asc';
            }
            this.coursesStore.selectSortType(this.sortItem.name);
        },
        handleChangeSortDirection() {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            this.coursesStore.selectSortDirection(this.sortDirection);
        },
    },
};
</script>
