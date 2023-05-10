<template>
    <div class="reviews">
        <ReviewUser :review="review" class="reviews__user" />
        <ReviewForm @create-review="handleCreateReview" />
    </div>
</template>

<script>
import ReviewForm from '@/components/Review/ReviewForm.vue';
import ReviewUser from '@/components/Review/ReviewUser.vue';

export default {
    name: 'ReviewItem',
    components: {
        ReviewForm, ReviewUser
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
