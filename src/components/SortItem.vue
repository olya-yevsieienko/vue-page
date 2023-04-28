<template>
    <!--
        @todo
        Прочти руководство по оформлению, которое поможет избежать возможных ошибок
        и приведёт код в единый, для всех проектов на vue, стиль
        https://v3.ru.vuejs.org/ru/style-guide/#%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D0%B8

        (
            P.S. обработчики событий в самом низу, если тебе нужен модификатор, то можно добавить последовательность
            к одному слушателю, а не вешать ещё один, например @click.stop.prevent="someMethod"
        )
    -->
    <div
        class="sort"
        @click="handleSelect"
        :class="{
            'sort--active': isActive,
        }"
    >
        <div class="sort__img-wrap">
            <span
                class="sort__img"
                @click="handleChangeSortDirection"
                @click.stop
                :class="{
                    'sort__img--desc': sortDirection === 'desc',
                }"
            ></span>
        </div>
        <span class="sort__name">{{ sortItem.title }}</span>
    </div>
</template>

<script>
/**
 * @todo
 * Для vue 3 нужно выбрать единый стиль написания кода (options или composition).
 * Не стоит смешивать их (в файле App.vue у тебя composition, а тут options).
 */
export default {
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
            if (this.isActive) {
                this.isActive = false;
                this.sortDirection = 'asc';
            } else {
                this.isActive = true;
            }

            // this.isActive = !this.isActive;

            // if (this.isActive) {
            //     this.sortDirection = 'asc';
            // }
        },
        handleChangeSortDirection() {
            if (this.sortDirection === 'asc') {
                this.sortDirection = 'desc';
            } else {
                this.sortDirection = 'asc';
            }

            // this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        },
    },
};
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
