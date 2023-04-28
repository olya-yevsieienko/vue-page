<template>
    <button
        class="button"
        :class="{
            'button--violet': bgrColor === 'violet'
        }"
    >
        <slot></slot>
    <img
        v-if="iconSrc"
        :src="'src/assets/image/' + iconSrc"
        alt=""
        class="button__icon"
        >
    </button>
</template>

<script>
export default {
    props: {
        bgrColor: {
            type: String,
            required: false
        },
        iconSrc: {
            type: String,
            required: false
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
    border: 1px solid $light-gray;
    border-radius: $border-radius;
    background-color: white;
    cursor: pointer;
    
    &--violet {
        color: white;
        border: none;
        background-color: $violet;
    }

    &__icon {
        margin-left: 11px;
    }
}
</style>