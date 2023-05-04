<template>
    <div>
        <li
            class="sidebar-item"
            :class="{
                'sidebar-item--active': isActiveLink
            }"
        >
            <RouterLink :to="`${item.title}`"
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
                v-if="isListOpen && item.options.length"
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
                        <ul v-if="isSublistOpen && (listItem.name === openedSublist)">
                            <li
                                v-for="sublistItem in listItem.list"
                                :key="sublistItem"
                                class="sidebar-item__sublist-item"
                                @click.stop="handleFilterCourses(sublistItem)"
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
import { useRouterStore } from '@/stores/RouterStore';
import capitalizeWord from '@/assets/helpers/capitalazeWord';
import CoursesVue from '../../pages/Courses.vue';

export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
        },
    },
    data() {
        return {
            isListOpen: false,
            isSublistOpen: false,
            isActiveLink: false,
            openedList: '',
            openedSublist: '',
        };
    },
    setup() {
        const coursesStore = useCoursesStore();
        const routerStore = useRouterStore();

        return { coursesStore, routerStore };
    },
    methods: {
        capitalizeWord,
        // change
        handleOpenList(listName) {
            if (this.openedList === listName) {
                this.isListOpen = false;
                this.isSublistOpen = false;
                this.coursesStore.filterCourses('');
                this.openedList = '';
            } else {
                this.openedList = listName;
                this.isListOpen = true;
                this.isSublistOpen = true;
            }

            this.routerStore.changePath(listName);
        },
        handleOpenSublist(listItemName) {
            if (this.openedSublist === listItemName) {
                this.openedSublist = '';
                this.isSublistOpen = false;
            } else {
                this.openedSublist = listItemName;
                this.isSublistOpen = true;
            }
        },
        handleFilterCourses(sublistItem) {
            this.coursesStore.filterCourses(sublistItem);
        }
    },
};
</script>
