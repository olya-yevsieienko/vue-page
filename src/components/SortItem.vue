<template>
    <div
        class="sort"
        @click="handleSelect"
        :class="{
            'sort--active' : isActive
        }"
    >
        <div class="sort__img-wrap">
            <span
                class="sort__img"
                @click="handleChangeSortDirection"
                @click.stop
                :class="{
                    'sort__img--desc': sortDirection === 'desc'
                }"
            ></span>
        </div>
        <span class="sort__name">{{ sortItem.title }}</span>
    </div>
</template>

<script>
export default {
    props: {
        sortItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isActive: false,
            sortDirection: 'asc',
        }
    },
    methods: {
        handleSelect() {
            if (this.isActive) {
                this.isActive = false;
                this.sortDirection = 'asc';
            } else {
                this.isActive = true;
            }
        },
        handleChangeSortDirection() {
            if (this.sortDirection === 'asc') {
                this.sortDirection = 'desc';
            } else {
                this.sortDirection = 'asc';
            }
        }
    },
}
</script>

<style>
.sort {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
}
.sort--active {
    font-weight: 700;
    color: var(--violet);
}
.sort--active .sort__img-wrap {
    visibility: visible;
}
.sort__img-wrap {
    margin-right: 8px;
    padding: 10px 0;
    visibility: hidden;
}
.sort__img {
    display: block;
    width: 20px;
    height: 14px;
    background: url('../assets/image/sort.svg');
    background-repeat: no-repeat;
}
.sort__img--desc {
    transform: rotate(180deg);
}
.sort__name {
    padding: 10px 0;
}
</style>