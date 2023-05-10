<template>
    <input
        type="text"
        :placeholder="placeholder"
        class="input"
        :value="modelValue"
        @input="handleUpdateInput"
    >
</template>

<script>
export default {
    name: 'VTextInput',
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        }
    },
    emits: ['update:modelValue'],
    methods: {
        handleUpdateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    padding: 8px 12px;
    display: block;
    height: 36px;
    font-size: 16px;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
}
</style>