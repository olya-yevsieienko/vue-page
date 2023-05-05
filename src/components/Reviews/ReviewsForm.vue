<template>
    <form
        class="form"
        @submit.prevent
    >
        <div class="form__block">
            <div class="form__inputs">
                <TextInput
                    class="form__input"
                    placeholder="Имя"
                    v-model="review.username"
                />
                <TextInput
                    class="form__input"
                    placeholder="Заголовок отзыва"
                    v-model="review.reviewTitle"
                />
            </div>
            
            <div class="form__grade">
                <span>Оценка:</span>
                <Rating :isActive="false" />
            </div>
        </div>

        <textarea
            class="form__text"
            v-model="review.reviewBody"
        />

        <div class="form__button">
            <Button
                backgroundColor="violet"
                @click="handleSubmit"
            >
                Отправить
            </Button>
            <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
    </form>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import TextInput from '@/components/UI/TextInput.vue';
import Rating from '@/components/UI/Rating.vue';

export default {
    name: 'ReviewForm',
    components: {
        TextInput, Button, Rating
    },
    data() {
        return {
            review: {
                username: '',
                reviewTitle: '',
                reviewBody: '',
                rating: 0
            }
        }
    },
    methods: {
        handleChangeRaiting() {
            return;
        },
        handleSubmit() {
            this.$emit('create-review', this.review);
            this.review = {
                username: '',
                reviewTitle: '',
                reviewBody: '',
                rating: 0
            }
        }
    }
}
</script>
