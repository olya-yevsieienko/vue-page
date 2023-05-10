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
                    <StarRating
                        :isActive="true"
                        v-model="review.rating"
                        :shouldBeCleared="isFormSubmitted"
                        @set-rating="handleGetRating"
                    />
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

        <Transition name="transition-opacity">
            <ModalWindow v-if="isModalOpen" @close="isModalOpen = false">
                Спасибо за отзыв!
            </ModalWindow>
        </Transition>
    </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import TextInput from '@/components/UI/TextInput.vue';
import StarRating from '@/components/UI/StarRating.vue';
import ModalWindow from '@/components/UI/ModalWindow.vue';

export default {
    name: 'ReviewForm',
    components: {
        TextInput, Button, StarRating, ModalWindow
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
            isFormSubmitted: false,
        }
    },
    methods: {
        handleGetRating(rating) {
            this.review.rating = rating;
        },
        handleSubmit() {
            if (this.review.username.length && this.review.reviewTitle.length
                && this.review.reviewBody.length && this.review.rating) {
                this.$emit('create-review', this.review);
                this.isModalOpen = true;
                this.isFormSubmitted = true;
                    
                this.review = {
                    username: '',
                    reviewTitle: '',
                    reviewBody: '',
                    rating: 0
                };
            }
        }
    }
}
</script>
