<template>
    <div class='rating'>
        <div class="rating__stars" v-if="!isActive">
            <span
                v-for='n in countOfSelectedStars'
                :key='n'
                class='rating__star rating__star--selected'
            />
            <span
                v-for='n in countOfUnselectedStars'
                :key='n'
                class='rating__star rating__star--unselected'
            />
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Rating',
    props: {
        rating: {
            type: Number,
            required: false,
        }, 
        isActive: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        countOfSelectedStars() {
            return this.rating ? this.rating : 0;
        },
        countOfUnselectedStars() {
            return (5 - this.countOfSelectedStars);
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