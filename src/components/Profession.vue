<template>
    <div class="prof">
        <div class="prof__header">
            <div class="prof__block">
                <img
                    :src="'src/assets/image/' + profession.iconSrc"
                    :alt="profession.title"
                    class="prof__img"
                >

                <div>
                    <div class="prof__block">
                        <h3 class="prof__title">{{ profession.title }}</h3>
                        <span class="prof__icon"></span>
                    </div>

                    <ul class="prof__tag-list">
                        <li
                            v-for="tag in profession.tags"
                            :key="tag"
                            class="prof__tag" 
                        >
                            {{ tag }}
                        </li>
                    </ul> 
                </div>
            </div>

            <div class="prof__block">
                <div class="prof__block--column">
                    <div>
                        <span class="prof__price">{{ profession.price }}</span>
                        <span>{{ profession.discount }}</span>
                    </div>
                    <span>цена</span>
                </div>

                <div class="prof__block--column">
                    <div class="prof__block"> 
                        <span class="prof__price">{{ profession.credit }}</span>
                    </div>
                    <span>кредит</span>
                </div>

                <div class="prof__block--column">
                    <div class="prof__stars">
                        <span
                        v-for="n in profession.rating"
                        :key="n"
                        class="prof__star prof__star--selected"
                        />
                         <span
                            v-for="n in countOfUnselectedStars"
                            :key="n"
                            class="prof__star prof__star--unselected"
                        />
                    </div>
                    <span>{{ profession.reviews }} {{ reviewWord }}</span>
                </div>
            </div>
        </div>

        <div class="prof__main">
            <p class="prof__body">{{ profession.body }}</p>

            <div class="prof__details">
                <div class="prof__block--column">
                    <ul>
                        <li
                            v-for="option in profession.info"
                            :key="option.name"
                            class="prof__info-item"
                        >
                            <strong  class="prof__subtitle">{{ option.name }}</strong>
                            <span class="prof__info-line"></span>
                            <span class="">{{ option.option }}</span>
                        </li>
                    </ul>
                    <span class="prof__tag">Гарантия трудоустройства</span>
                </div>
                
                <div class="prof__block--columns">
                    <div 
                        v-for="option in profession.benefits"
                        :key="option.name"
                    >
                        <span class="prof__benefits-line"></span>
                        <div class="prof__benefits">
                            <strong class="prof__subtitle">{{ option.name }}</strong>
                            <p class="">{{ option.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="prof__buttons">
            <Button :bgrColor="'violet'">
                Узнать подробнее
            </Button>
            <Button :iconSrc="'arrow.svg'">
                Читать отзывы
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import { getCorrectEndingForReviews } from '@/assets/helpers/getCorrectEnding.js';

export default {
  components: { Button },
    props: {
        profession: {
            type: Object
        }
    },
    computed: {
        countOfUnselectedStars() {
            return (5 - this.profession.rating);
        },
        reviewWord() {
            return getCorrectEndingForReviews(this.profession.reviews);
        },
    }
}
</script>