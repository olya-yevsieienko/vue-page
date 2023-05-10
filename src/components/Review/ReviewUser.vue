<template>
    <div class="review">
        <div class="review__header">
            <div class="review__block">
                <img
                    :src="userPhoto"
                    alt=""
                    class="review__photo"
                >
                <span class="review__name">{{ review.name }}:</span>
                <span class="review__title">{{ review.title }}</span>
            </div>

            <div class="review__block">
                <span class="review__date">{{ formatDate(this.review.date, MONTHS) }}</span>
                <VRating
                    :rating="review.rating"
                    :isActive="false"
                />
            </div>
        </div>
        
        <p class="review__body">{{ review.body }}</p>
    </div>
</template>

<script>
import VRating from '@/components/UI/VRating.vue';
import formatDate from '@/assets/helpers/formatDate';
import { MONTHS } from '@/assets/constants/api';

export default {
    name: 'ReviewUser',
    components: {
        VRating
    },
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate
    },
    computed: {
        userPhoto() {
            return this.review.photo !== ''
                ? this.review.photo
                : 'src/assets/image/user.svg';
        },
    },
    created() {
        this.MONTHS = MONTHS.REVIEWS;
    }
}
</script>