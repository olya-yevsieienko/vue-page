import { defineStore } from 'pinia';
import courses from '@/assets/models/courses';

export const useSidebarStore = defineStore('SidebarStore', {
    state: () => ({
        courses,
        selectedItem: '',
        sortType: '',
        sortDirection: '',
        coursesCount: 0,
    }),
    actions: {
        selectCours(coursName) {
            this.selectedItem = coursName;
        },
        selectSortType(type) {
            this.sortType = type;
        },
        selectSortDirection(direction) {
            this.sortDirection = direction;
        },
    }
});
