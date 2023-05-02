<template>
    <div class="search">
        <input
            type="text"
            class="search__input"
            placeholder="Поиск..."
        />
        <div class="search__img"></div>
    </div>
</template>

<script>

export default {
    name: 'Search',
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables.scss';

.search {
    position: relative;
    display: block;
    width: 230px;

    &__input {
        padding: 7px 15px;
        width: 100%;
        font-family: inherit;
        font-size: 16px;
        border: none;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        outline: none;
    }

    &::placeholder {
        color: $search;
    }

    &__img {
        position: absolute;
        top: 3px;
        right: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: $border-radius;
        background: $violet;

        &::after {
            content: url('@/assets/image/search.svg');
            width: 15px;
            height: 15px;
        }
    }
}
</style>
