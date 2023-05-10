<template>
    <button
        class="button"
        :class="{
            'button--violet': backgroundColor === 'violet'
        }"
    >
        <slot />
        <img
            v-if="iconSrc"
            :src="`src/assets/image/${iconSrc}`"
            alt=""
            class="button__icon"
        >
    </button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        backgroundColor: {
            type: String,
        },
        iconSrc: {
            type: String,
        }   
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables.scss';

.button {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 148px;
    font-family: inherit;
    color: inherit;
    border: 1px solid $gray--10;
    border-radius: $border-radius;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
        background-color: $gray--40;
    }

    &--violet {
        color: white;
        border: none;
        background-color: $violet--100;

        transition: all .5s ease;

        &:hover {
            background-color: $violet--80;
        }
    }

    &__icon {
        margin-left: 12px;
    }
}
</style>