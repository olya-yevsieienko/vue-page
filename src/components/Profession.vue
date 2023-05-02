<template>
    <div class='prof'>
        <div class='prof__header'>
            <div class='prof__block'>
                <img
                    :src='"src/assets/image/" + profession.iconSrc'
                    :alt='profession.title'
                    class='prof__img'
                >

                <div>
                    <div class='prof__block'>
                        <h3 class='prof__title'>{{ profession.title }}</h3>
                        <span class='prof__icon'></span>
                    </div>

                    <ul class='prof__tag-list'>
                        <li
                            v-for='tag in profession.tags'
                            :key='tag'
                            class='prof__tag' 
                        >
                            {{ tag }}
                        </li>
                    </ul> 
                </div>
            </div>

            <div class='prof__prices'>
                <div class='prof__block--column'>
                    <div class='prof__block'>
                        <span class='prof__price'>{{ profession.price }} ₽</span>
                        <span class='prof__discount'>{{ profession.discount }} ₽</span>
                    </div>
                    <span class="prof__descrptn">цена</span>
                </div>

                <div class='prof__block--column'>
                    <div> 
                        <span class='prof__price'>
                            {{ profession.credit }} ₽/мес
                        </span>
                    </div>
                    <span class="prof__descrptn">кредит</span>
                </div>

                <Rating :rating="profession.rating" :isActive="false">
                    <span class="prof__descrptn">{{ profession.reviews }} {{ reviewWord }}</span>
                </Rating>
            </div>
        </div>

        <div class='prof__main'>
            <p class='prof__body'>{{ profession.body }}</p>

            <div class='prof__details'>
                <div class='prof__block--column'>
                    <ul>
                        <li
                            v-for='option in profession.info'
                            :key='option.name'
                            class='prof__info-item'
                        >
                            <strong  class='prof__subtitle'>{{ option.name }}</strong>
                            <span class='prof__info-line'></span>
                            <span class=''>{{ option.option }}</span>
                        </li>
                    </ul>
                    <span class='prof__tag'>Гарантия трудоустройства</span>
                </div>
                
                <div class='prof__block--columns'>
                    <div 
                        v-for='option in profession.features'
                        :key='option.name'
                    >
                        <div
                            class='prof__features'
                            :class='{
                                "prof__features--red": option.color === "red"
                            }'
                        >
                            <strong class='prof__subtitle'>{{ option.name }}</strong>
                            <p>{{ option.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class='prof__buttons'>
            <Button :bgrColor='"violet"'>
                Узнать подробнее
            </Button>
            <Button :iconSrc='"arrow.svg"'>
                Читать отзывы
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import Rating from '@/components/UI/Rating.vue';
import { getCorrectEndingForReviews } from '@/assets/helpers/getCorrectWordEnding.js';

export default {
  components: { Button, Rating },
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