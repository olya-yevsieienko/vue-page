<template>
    <div class="rating">
        <div class="rating__stars">
            <span
                v-for="starIndex in maxRating"
                :key="starIndex"
                class="rating__star rating__star--unselected"
                @click="handleChangeRating(starIndex)"
            />
            <div class="rating__stars-selected">
                <span
                    v-for="starIndex in countOfSelectedStars"
                    :key="starIndex"
                    class="rating__star rating__star--selected"
                    @click="handleChangeRating(starIndex)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { MAX_RATING } from '@/assets/constants/api';

export default {
    name: 'StarRating',
    props: {
        maxRating: {
            type: Number,
            default: MAX_RATING
        },
        rating: {
            type: Number,
        }, 
        isActive: {
            type: Boolean,
        },
        shouldBeCleared: {
            type: Boolean
        }
    },
    data() {
        return {
            selectedStars: this.rating
        }
    },
    watch: {
        shouldBeCleared: function() {
            this.selectedStars = 0;
        }
    },
    methods: {
        handleChangeRating(starIndex) {
            if (this.isActive) {
                this.selectedStars = starIndex;
                this.$emit('set-rating', starIndex);
            }
        }
    },
    computed: {
        countOfSelectedStars() {
            return this.selectedStars || 0;
        },
        countOfUnselectedStars() {
            return (this.maxRating - this.countOfSelectedStars);
        },
    }
}
</script>

<style lang="scss">
.rating {
    position: relative;

    &__stars-selected {
        position: absolute;
        display: flex;
    }

    &__stars {
        display: flex;
    }

    &__star {
        display: block;
        width: 20px;
        height: 20px;

        &:not(:first-child) {
            margin-left: 5px;
        }

        &--selected {
            background: url('@/assets/image/star-selected.svg');
        }

        &--unselected {
            background: url('@/assets/image/star.svg');
            
        }
        
        &:hover {
            background: url('@/assets/image/star-selected.svg');
        }
    }
}
</style>