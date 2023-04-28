<template>
    <div class="sorting">
        <sort-item
            v-for="item in sortItems"
            :key="item.id"
            :sortItem="item"
        />
    </div>
</template>

<script>
import SortItem from './SortItem.vue';

export default {
    components: {SortItem},
    data() {
        return {
            /**
             * @todo
             * Если ты не меняешь значения sortItems, то они не должны быть в data
             * В data реактивно меняющиеся данные
             * В данном случае у тебя не происходит изменения значений, поэтому нужно перенести этот массив
             * в computed
             */
            sortItems: [
                {id: 1, title: 'По рейтингу'},
                {id: 2, title: 'По цене'},
            ],
        };
    },
};
</script>

<style>
.sorting {
    display: flex;
    align-items: center;
    gap: 35px;
}
</style>
