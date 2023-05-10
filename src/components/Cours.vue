<template>
    <div class="cours">
        <div class="cours__content">
            <div class="cours__header">
                <div class="cours__block">
                    <img
                        :src="`src/assets/image/${cours.iconSrc}`"
                        :alt="cours.title"
                        class="cours__image"
                    >

                    <div>
                        <div class="cours__block">
                            <h3 class="cours__title">{{ cours.title }}</h3>
                            <span class="cours__icon" />
                        </div>

                        <ul class="cours__tag-list">
                            <Tag v-for="tag in cours.tags" :key="tag" class="cours__tag">
                                {{ tag }}
                            </Tag>
                        </ul>
                    </div>
                </div>

                <div class="cours__prices">
                    <div class="cours__block--column">
                        <p class="cours__block">
                            <span class="cours__price">{{ splitNumber(cours.price) }} ₽</span>
                            <Tag class="cours__discount" styleColor="green">
                                {{ splitNumber(cours.discount) }} ₽
                            </Tag>
                        </p>
                        <span class="cours__caption">цена</span>
                    </div>

                    <p class="cours__block--column">
                        <span class="cours__price">
                            {{ splitNumber(cours.credit) }} ₽/мес
                        </span>
                        <span class="cours__caption">кредит</span>
                    </p>

                    <div class="cours__block--column">
                        <StarRating
                            class="cours__rating"
                            :rating="cours.rating"
                            :isActive="false"
                        />
                        <span class="cours__caption">
                            {{ cours.reviews }} {{ reviewWord }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="cours__description">
                <p>{{ cours.body }}</p>

                <div class="cours__details">
                    <div class="cours__block--column">
                        <ul>
                            <li
                                v-for="option in cours.info"
                                :key="option.name"
                                class="cours__info-item"
                            >
                                <strong class="cours__subtitle">{{ option.name }}</strong>
                                <span class="cours__info-line" />
                                <span class="">{{ option.option }}</span>
                            </li>
                        </ul>
                        <Tag>Гарантия трудоустройства</Tag>
                    </div>

                    <div class="cours__block--columns">
                        <div
                            v-for="option in cours.features"
                            :key="option.name" class="cours__features"
                            :class="{
                                'cours__features--red': option.color === 'red'
                            }"
                        >
                            <strong class="cours__subtitle">{{ option.name }}</strong>
                            <p>{{ option.body }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cours__buttons">
                <Button backgroundColor="violet" @click="handleOpenDetails">
                    Узнать подробнее
                </Button>
                <Button iconSrc="arrow.svg" @click="handleOpenReviews">
                    Читать отзывы
                </Button>
            </div>
        </div>

        <Transition name="cours">
            <Reviews :review="review" v-if="isReviewsOpened" />
        </Transition>
        <TransitionGroup name="cours">
            <Vacancies :cours="cours" v-if="isDetailsOpened" />
            <Benefits :cours="cours" v-if="isDetailsOpened" />
        </TransitionGroup>
    </div>
</template>

<script>
import Reviews from '@/components/Reviews/Reviews.vue';
import Vacancies from '@/components/Vacancies.vue';
import Benefits from '@/components/Benefits.vue';
import Button from '@/components/UI/Button.vue';
import StarRating from '@/components/UI/StarRating.vue';
import Tag from '@/components/UI/Tag.vue';
import getCorrectEnding from '@/assets/helpers/getCorrectWordEnding.js';
import splitNumber from '@/assets/helpers/splitNumber';
import { MAX_RATING } from '@/assets/constants/api';
import reviews from '@/assets/models/reviews';

export default {
    name: 'Cours',
    components: {
        Button, StarRating, Tag, Reviews, Vacancies, Benefits
    },
    props: {
        cours: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isReviewsOpened: false,
            isDetailsOpened: false
        }
    },
    methods: {
        splitNumber,
        handleOpenReviews() {
            this.isReviewsOpened = !this.isReviewsOpened;
        },
        handleOpenDetails() {
            this.isDetailsOpened = !this.isDetailsOpened;
        },
    },
    computed: {
        countOfUnselectedStars() {
            return (MAX_RATING - this.cours.rating);
        },
        reviewWord() {
            return getCorrectEnding(this.cours.reviews, 'отзыв');
        },
        review() {
            return reviews.find(review => review.coursId === this.cours.id);
        }
    }
}
</script>
