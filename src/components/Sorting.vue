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
  components: { SortItem },
  data() {
    return {
        sortItems: [
            {id: 1, title: 'По рейтингу'},
            {id: 2, title: 'По цене'}
        ]
    }
  }
}
</script>

<style>
.sorting {
    display: flex;
    align-items: center;
    gap: 35px;
}
</style>
