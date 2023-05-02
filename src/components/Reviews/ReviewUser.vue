<template>
    <div class="review">
        <div class="review__header">
            <div class="review__block">
                <img
                    :src="userPhoto"
                    alt=""
                    class="review__photo"
                >
                <span class="review__name">{{ review.name }}: </span>
                <span class="review__title">{{ review.title }}</span>
            </div>

            <div class="review__block">
                <span class="review__date">{{ date }}</span>
                <Rating :rating="review.rating" :isActive="false" />
            </div>
        </div>
        
        <p class="review__body">{{ review.body }}</p>
    </div>
</template>

<script>
import reviews from '@/assets/models/reviews';
import Rating from '@/components/UI/Rating.vue';
import formatDate from '@/assets/helpers/formatDate';

export default {
  components: { Rating },
    computed: {
        review() {
            return reviews[0];
        },
        userPhoto() {
            return this.review.photo !== ''
                ? this.review.photo
                : 'src/assets/image/user.svg';
        },
        date() {
            return formatDate(this.review.date);
        }
    }
}
</script>