<template>
    <div>
        <li
            class="sidebar-item"
            :class="{
                'sidebar-item--active': item.title === routerStore.selectedSidebarLink 
            }"
        >
            <RouterLink :to="`/${item.title}`"
                class="sidebar-item__info"
                @click="handleOpenList(item.title)"
            >
                <img
                    :src="`src/assets/image/${item.src}`"
                    :alt="item.title"
                    class="sidebar-item__image"
                />
                <span class="sidebar-item__name">
                    {{ capitalizeWord(item.title) }}
                </span>
            </RouterLink>
        </li>
    
        <TransitionGroup name="sidebar-item">
            <ul
                v-if="item.options.length && (item.title === routerStore.selectedSidebarLink)"
                class="sidebar-item__list"
            >
                <li
                    v-for="listItem in item.options"
                    :key="listItem.name"
                    class="sidebar-item__list-item"
                    @click.stop="handleOpenSublist(listItem.name)"
                >
                    {{ listItem.name }}
        
                    <TransitionGroup name="sidebar-item">
                        <ul v-if="listItem.name === openedSublist">
                            <li
                                v-for="sublistItem in listItem.list"
                                :key="sublistItem"
                                class="sidebar-item__sublist-item"
                                :class="{
                                    'sidebar-item--active': sublistItem === sidebarStore.selectedItem
                                }"
                                @click.stop="handleSelectCours(sublistItem)"
                            >
                                {{ sublistItem }}
                            </li>
                        </ul>
                    </TransitionGroup>
                </li>
            </ul>
        </TransitionGroup>
    </div>
</template>

<script>
import { useSidebarStore } from '@/stores/SidebarStore';
import { useRouterStore } from '@/stores/RouterStore';
import capitalizeWord from '@/assets/helpers/capitalazeWord';

export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            openedList: '',
            openedSublist: '',
        };
    },
    setup() {
        const sidebarStore = useSidebarStore();
        const routerStore = useRouterStore();

        return { sidebarStore, routerStore };
    },
    methods: {
        capitalizeWord,
        handleOpenList(listName) {
            this.openedList = this.openedList === listName ? '' : listName;
            this.openedSublist = '';
            this.sidebarStore.selectCours('');
            this.routerStore.changeSelectedSidebarLink(listName);
        },
        handleOpenSublist(listItemName) {
            this.openedSublist = this.openedSublist === listItemName ? '' : listItemName;
        },
        handleSelectCours(sublistItem) {
            this.sidebarStore.selectCours(sublistItem);
        }    
    }
};
</script>
