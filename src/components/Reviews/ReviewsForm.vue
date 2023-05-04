<template>
    <form class="form">
        <div class="form__block">
            <div class="form__inputs">
                <TextInput
                    class="form__input"
                    placeholder="Имя"
                />
                <TextInput
                    class="form__input"
                    placeholder="Заголовок отзыва"
                />
            </div>
            
            <div class="form__grade">
                <span>Оценка:</span>
                <Rating :isActive="false" />
            </div>
        </div>

        <textarea class="form__text" />

        <div class="form__button">
            <Button backgroundColor="violet">Отправить</Button>
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
    methods: {
        handleChangeRaiting() {
            return;
        }
    }
}
</script>
