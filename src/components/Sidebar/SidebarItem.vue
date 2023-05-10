<template>
    <div>
        <li
            class="sidebar-item"
            :class="{
                'sidebar-item--active': item.title === sidebarStore.selectedItem 
            }"
        >
            <RouterLink :to="`/${item.name}`"
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
    
        <TransitionGroup name="transition-transform">
            <ul
                v-if="item.options.length && (item.title === sidebarStore.selectedItem)"
                class="sidebar-item__list"
            >
                <li 
                    v-for="listItem in item.options"
                    :key="listItem.name"
                    class="sidebar-item__list-item"
                    @click.stop="handleOpenSublist(listItem.name)"
                >
                    {{ listItem.name }}
        
                    <TransitionGroup name="transition-transform">
                        <ul v-if="listItem.name === openedSublist">
                            <li
                                v-for="sublistItem in listItem.list"
                                :key="sublistItem"
                                class="sidebar-item__sublist-item"
                                :class="{
                                    'sidebar-item--active': sublistItem === sidebarStore.selectedItemOption
                                }"
                                @click.stop="sidebarStore.selectSidebarLinkOption(sublistItem)"
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
import { useCoursesStore } from '@/stores/CoursesStore';
import { useSidebarStore } from '@/stores/SidebarStore';
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
        const coursesStore = useCoursesStore();
        const sidebarStore = useSidebarStore();

        return { coursesStore, sidebarStore };
    },
    created() {

    },
    methods: {
        capitalizeWord,
        handleOpenList(listName) {
            this.openedList = this.openedList === listName ? '' : listName;
            this.openedSublist = '';
            this.sidebarStore.selectSidebarLink(listName);
            this.sidebarStore.selectSidebarLinkOption('');
        },
        handleOpenSublist(listItemName) {
            this.openedSublist = this.openedSublist === listItemName ? '' : listItemName;
        }  
    },
    
};
</script>
