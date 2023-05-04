<template>
    <div class="rating">
        <div class="rating__stars" v-if="!isActive">
            <span
                v-for="starNumber in countOfSelectedStars"
                :key="`star-${starNumber}`"
                class="rating__star rating__star--selected"
            />
            <span
                v-for="starNumber in countOfUnselectedStars"
                :key="`star-${starNumber}`"
                class="rating__star rating__star--unselected"
            />
        </div>
    </div>
</template>

<script>
import { MAX_RATING } from '@/assets/constants/api';

export default {
    name: 'Rating',
    props: {
        rating: {
            type: Number,
        }, 
        isActive: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        countOfSelectedStars() {
            return this.rating || 0;
        },
        countOfUnselectedStars() {
            return (MAX_RATING - this.countOfSelectedStars);
        },
    }
}
</script>

<style lang="scss">
.rating {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__stars {
        display: flex;
    }

    &__star {
        display: block;
        width: 20px;
        height: 20px;

        &:not(:last-child) {
            margin-right: 5px;
        }

        &--selected {
            background: url('@/assets/image/star-selected.svg');
        }

        &--unselected {
            background: url('@/assets/image/star.svg');
        }
    }
}
</style>