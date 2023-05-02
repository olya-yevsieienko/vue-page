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
                @click.stop="handleChangeSortDirection"
                :class="{
                    'sort__img--desc': sortDirection === 'desc',
                }"
            />
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
