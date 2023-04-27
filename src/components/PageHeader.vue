<template>
    <div class="header">
        <div class="header__block">
            <img
                src="@/assets/image/logo.svg"
                alt="OWLtop"
                class="header__logo"
            >
    
            <div class="header__title">
                <h2 class="header__title-name">Курсы по Photoshop</h2>
                <span class="header__course-count">10</span>
            </div>
        </div>

        <div class="header__sorting">
            <sorting />
        </div>
    </div>
</template>

<script>
import Sorting from './Sorting.vue';

export default {
    components: {Sorting}
    
}
</script>

<style scoped>
.header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
}
.header__block {
    display: flex;
}
.header__logo {
    margin-right: 94px;
}
.header__title {
    display: flex;
    align-items: center;
}
.header__title-name {
    margin-right: 20px;
    font-size: 26px;
    font-weight: 600;
}
.header__course-count {
    display: block;
    padding: 6px 10px;
    font-weight: bold;
    color: #fff;
    background: rgba(179, 192, 217, 1);
    border-radius: 20px;
}
</style>