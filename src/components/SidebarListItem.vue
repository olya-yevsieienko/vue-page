<template>
    <li class="item">
        <div class="item__info" @click="hadleOpenList">
            <img :src="'src/assets/image/' + item.src" :alt="item.title">
            <span class="item__name">{{ item.title }}</span>
        </div>

        <ul v-if="isListOpen">
            <li
                v-for="listItem in item.options"
                :key="listItem.id"
            >
                {{ listItem.name }}
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
        }
    },
    data() {
        return {
            isListOpen: false,
        }
    },
    methods: {
        hadleOpenList() {
            this.isListOpen = !this.isListOpen;
        }
    }
}
</script>

<style scoped>
.item {
    cursor: pointer;
}
</style>