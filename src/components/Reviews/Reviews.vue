<template>
    <div class="reviews">
        <ReviewUser :review="review" class="reviews__user" />
        <ReviewsForm @create-review="handleCreateReview" />
    </div>
</template>

<script>
import ReviewsForm from '@/components/Reviews/ReviewsForm.vue';
import ReviewUser from '@/components/Reviews/ReviewUser.vue';

export default {
    name: 'Reviews',
    components: {
        ReviewsForm, ReviewUser
    },
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleCreateReview(review) {
            console.log(review);
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables';

.reviews {
    padding: 26px 30px 30px;
    box-shadow: $box-shadow;

    &__user {
        margin-bottom: 30px;
    }
}
</style>
