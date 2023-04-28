<template>
    <div class="header">
        <div class="header__block">
            <img
                src="@/assets/image/logo.svg"
                alt="OWLtop"
                class="header__logo"
            />

            <div class="header__title">
                <!-- Заголовок из роута -->
                <h2 class="header__title-name">Курсы по Photoshop</h2>
                <span class="header__course-count">10</span>
            </div>
        </div>

        <div class="header__sorting">
            <Sorting />
        </div>
    </div>
</template>

<script>
import Sorting from '@/components/Sorting.vue';

export default {
    components: {Sorting},
};
</script>
