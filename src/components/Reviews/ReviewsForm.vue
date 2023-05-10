<template>
    <div>
            <form
            class="form"
            @submit.prevent
        >
            <div class="form__block">
                <div class="form__inputs">
                    <TextInput
                        class="form__input"
                        placeholder="Имя"
                        v-model.trim="review.username"
                    />
                    <TextInput
                        class="form__input"
                        placeholder="Заголовок отзыва"
                        v-model.trim="review.reviewTitle"
                    />
                </div>
            
                <div class="form__grade">
                    <span>Оценка:</span>
                    <Rating :isActive="false" />
                </div>
            </div>

            <textarea
                class="form__text"
                v-model.trim="review.reviewBody"
            />

            <div class="form__button">
                <Button
                    backgroundColor="violet"
                    @click="handleSubmit"
                >
                    Отправить
                </Button>
                <span>
                    * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                </span>
            </div>
        </form>

        <Transition name="form__modal">
            <ModalWindow v-if="isModalOpen" @close="isModalOpen = false">
            Спасибо за отзыв!
            </ModalWindow>
        </Transition>
    </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import TextInput from '@/components/UI/TextInput.vue';
import Rating from '@/components/UI/Rating.vue';
import ModalWindow from '@/components/UI/ModalWindow.vue';

export default {
    name: 'ReviewForm',
    components: {
        TextInput, Button, Rating, ModalWindow
    },
    data() {
        return {
            review: {
                username: '',
                reviewTitle: '',
                reviewBody: '',
                rating: 0
            },
            isModalOpen: false,
        }
    },
    methods: {
        handleChangeRaiting() {
            return;
        },
        handleSubmit() {
            if (this.review.username.length && this.review.reviewTitle.length
                && this.review.reviewBody.length || this.review.rating !== 0) {
                this.$emit('create-review', this.review);

                this.review = {
                    username: '',
                    reviewTitle: '',
                    reviewBody: '',
                    rating: 0
                };
                this.isModalOpen = true;
            }
        }
    }
}
</script>
