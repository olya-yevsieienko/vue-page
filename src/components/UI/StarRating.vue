<template>
    <div class="rating">
        <div
            class="rating__stars"
            @mouseleave="starsOnHover = selectedStars"
        >
            <span
                v-for="starIndex in maxRating"
                :key="starIndex"
                class="rating__star rating__star--unselected"
                @click="handleChangeRating(starIndex)"
                @mouseover="starsOnHover = starIndex"
            />
            <div class="rating__stars-selected">
                <TransitionGroup name="transition-opacity">
                    <span
                        v-for="starIndex in countOfSelectedStars"
                        :key="starIndex"
                        class="rating__star rating__star--selected"
                        @click="handleChangeRating(starIndex)"
                        @mouseover="starsOnHover = starIndex"
                    />
                </TransitionGroup>
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
            type: Number
        }, 
        isActive: {
            type: Boolean
        },
        shouldBeCleared: {
            type: Boolean
        }
    },
    data() {
        return {
            selectedStars: this.rating,
            visibleStars: this.rating,
            starsOnHover: 0,
        }
    },
    watch: {
        shouldBeCleared: function() {
            this.visibleStars = 0;
            this.selectedStars = 0;
        },
        starsOnHover: function() {
            if (this.isActive) {
                this.visibleStars = this.starsOnHover;
            }
        }
    },
    methods: {
        handleChangeRating(starIndex) {
            if (this.isActive) {
                this.selectedStars = starIndex;
                this.starsOnHover = starIndex;
                this.$emit('set-rating', starIndex);
            }
        },
        handleChangeVisibleOfStars(starIndex) {
            this.starsOnHover = starIndex;
        }
    },
    computed: {
        countOfSelectedStars() {
            return this.visibleStars || 0;
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
        cursor: pointer;

        &:not(:first-child) {
            margin-left: 5px;
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