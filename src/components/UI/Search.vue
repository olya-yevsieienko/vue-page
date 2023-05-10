<template>
    <div class="search">
        <TextInput
            placeholder="Поиск..."
            class="search__input"
            v-model="searchQuery"
            v-on:keyup.enter="handleChangeSearchQuery"
        />
        <span
            class="search__image"
            @click="handleChangeSearchQuery"
        />
    </div>
</template>

<script>
import TextInput from '@/components/UI/TextInput.vue';
import { useSearchStore } from '@/stores/SearchStore';

export default {
    name: 'Search',
    components: {
        TextInput 
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    setup() {
        const searchStore = useSearchStore();

        return { searchStore };
    },
    methods: {
        handleChangeSearchQuery() {
            this.searchStore.setSearchQuery(this.searchQuery.toLowerCase());
        }
    }
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables.scss';

.search {
    position: relative;
    display: block;
    width: 230px;

    &__input {
        width: 230px;
    }

    &__image {
        position: absolute;
        top: 3px;
        right: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: $border-radius;
        background: $violet--100;

        &::after {
            content: url('@/assets/image/search.svg');
            width: 16px;
            height: 16px;
        }
    }
}
</style>
