<template>
    <p :class="['tag', tagClass]">
        <slot />
    </p>
</template>

<script>
export default {
    name: 'VTag',
    props: {
        styleColor: {
            type: String,
            default: ''
        },
    },
    computed: {
        tagClass() {
            return this.styleColor ? `tag--${this.styleColor}` : '';
        }
    }
}
</script>

<style lang="scss" scoped>
.tag {
    padding: 4px 12px;
    display: inline-block;
    font-size: 12px;
    border: 1px solid $gray--10;
    border-radius: 20px;

    &--violet {
        border: 1px solid $violet--100;
        color: $violet--100;
    }

    &--green {
        font-weight: bold;
        border: none;
        color: $green--100;
        background: $green--40;
    }
}
</style>