<template>
    <input
        type="text"
        :placeholder="placeholder"
        class="input"
    >
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        placeholder: {
            type: String,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/utils/variables.scss';

.input {
    padding: 8px 12px;
    display: block;
    height: 36px;
    font-size: 16px;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
}
</style>