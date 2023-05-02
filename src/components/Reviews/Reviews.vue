<template>
    <div class="reviews">
        <div class="reviews__user">
            <ReviewUser />
        </div>
 
        <ReviewsForm />
    </div>
</template>

<script>
import ReviewsForm from '@/components/Reviews/ReviewsForm.vue';
import ReviewUser from '@/components/Reviews/ReviewUser.vue';

export default {
    components: { ReviewsForm, ReviewUser },
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/variables';

.reviews {
    margin-bottom: 60px;
    padding: 26px 30px 30px;
    box-shadow: $box-shadow;

    &__user {
        margin-bottom: 30px;
    }
}
</style>
