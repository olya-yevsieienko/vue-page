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
    computed: {
        listLength() {
           return this.item.options.length; 
        }
    }
};
</script>
