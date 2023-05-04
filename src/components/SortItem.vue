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
    methods: {
        handleSelect() {
            this.isActive = !this.isActive;

            if (this.isActive) {
                this.sortDirection = 'asc';
            }
        },
        handleChangeSortDirection() {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        },
    },
};
</script>
