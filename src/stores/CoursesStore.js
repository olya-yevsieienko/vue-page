import { defineStore } from 'pinia';
import courses from '@/assets/models/courses';

export const useCoursesStore = defineStore('CoursesStore', {
    state: () => ({
        courses,
        filter: '',
        sortType: '',
        sortDirection: '',
        coursesCount: 0,
    }),
    actions: {
        filterCourses(coursName) {
            this.filter = coursName;
        },
        selectSortType(type) {
            this.sortType = type;
        },
        selectSortDirection(direction) {
            this.sortDirection = direction;
        },
    }
})