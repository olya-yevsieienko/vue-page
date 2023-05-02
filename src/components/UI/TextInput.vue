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
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/utils/variables.scss';

.input {
    padding: 7px 12px;
    display: block;
    width: 218px;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
}
</style>