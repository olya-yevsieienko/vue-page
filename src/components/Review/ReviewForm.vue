<template>
    <div>
        <form
            class="form"
            @submit.prevent
        >
            <div class="form__block">
                <div class="form__inputs">
                    <VTextInput
                        class="form__input"
                        placeholder="Имя"
                        v-model.trim="review.username"
                    />
                    <VTextInput
                        class="form__input"
                        placeholder="Заголовок отзыва"
                        v-model.trim="review.reviewTitle"
                    />
                </div>
            
                <div class="form__grade">
                    <span>Оценка:</span>
                    <VRating
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
                <VButton
                    backgroundColor="violet"
                    @click="handleSubmit"
                >
                    Отправить
                </VButton>
                <span>
                    * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                </span>
            </div>
        </form>

        <Transition name="transition-opacity">
            <VModal v-if="isModalOpen" @close="isModalOpen = false">
                Спасибо за отзыв!
            </VModal>
        </Transition>
    </div>
</template>

<script>
import VButton from '@/components/UI/VButton.vue';
import VTextInput from '@/components/UI/VTextInput.vue';
import VModal from '@/components/UI/VModal.vue';
import VRating from '@/components/UI/VRating.vue';

export default {
    name: 'ReviewForm',
    components: {
        VTextInput, VButton, VRating, VModal
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
