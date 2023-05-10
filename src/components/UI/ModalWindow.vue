<template>
    <div class="modal-window" @click="handleCloseModal">
        <div class="modal-window__content" @click.stop>
            <span class="modal-window__close" @click="handleCloseModal">
                X
            </span>
            <p class="modal-window__text">
                <slot />
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalWindow',
    props: {
        isModalOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        handleCloseModal() {
            this.$emit('close');
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables';

.modal-window {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(17, 17, 17, 0.5);
    overflow: hidden;

    &__content {
        padding: 24px;
        display: flex;
        flex-direction: column;
        height: 180px;
        width: 290px;
        background: #fff;
        border-radius: $border-radius;
        transition: all 0.3s ease;
    }

    &__close {
        text-align: right;
        cursor: pointer;
    }

    &__text {
        margin-top: 32px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }
}
</style>
