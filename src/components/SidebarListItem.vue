<template>
    <!-- 
        В vue 3 допускается нахождение более одного элемента внутри template без корневого, а
        в nuxt или vue 2 - нет (держи в голове эту инфу, чтоб потом не было проблем)
    -->
    <li class="item">
        <div
            class="item__info"
            @click="handleOpenList()"
        >
            <img
                :src="'src/assets/image/' + item.src"
                :alt="item.title"
                class="item__img"
            />
            <span class="item__name">
                {{ item.title }}
            </span>
        </div>
    </li>

    <ul
        v-if="isListOpen && listLength"
        class="item__list"
    >
        <li
            v-for="listItem in item.options"
            :key="listItem.id"
            @click.stop="handleOpenSublist(listItem.id)"
            class="item__list-item"
        >
            {{ listItem.name }}

            <ul v-if="isSublistOpen">
                <li
                    v-for="item in listItem.list"
                    :key="item"
                    class="item__sublist-item"
                    @click.stop
                >
                    {{ item }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
        },
    },
    data() {
        return {
            isListOpen: false,
            isSublistOpen: false,
            /**
             * @todo
             * Ты не меняешь длину массива, поэтому в data этого быть не должно
             */
            listLength: this.item.options.length,
        };
    },
    methods: {
        handleOpenList() {
            this.isListOpen = !this.isListOpen;
        },
        handleOpenSublist(id) {
            this.isSublistOpen = !this.isSublistOpen;
        },
    },
};
</script>

<style scoped>
.item {
    list-style: none;
    cursor: pointer;
}
.item:not(:last-child) {
    margin-bottom: 22px;
}
.item__info {
    display: flex;
    align-items: center;
    height: 25px;
}
.item__img {
    margin-right: 20px;
    width: 24px;
}
.item__name {
    font-size: 18px;
    font-weight: 600;
}
.item__list {
    margin: 22px 0 30px 12px;
    padding: 8px 0;
    border-left: 1px solid var(--border);
}
.item__list-item {
    margin-left: 32px;
    font-size: 12px;
    color: var(--secondary-text);
    cursor: pointer;
}
.item__list-item:not(:last-child),
.item__sublist-item:not(:last-child) {
    margin-bottom: 10px;
}
.item__sublist-item:first-child {
    margin-top: 12px;
}
.item__sublist-item {
    font-weight: 600;
}
.item__sublist-item--active {
    color: var(--violet);
}

ul {
    list-style: none;
}
</style>
