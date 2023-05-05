import { defineStore } from 'pinia';
import courses from '@/assets/models/courses';

export const useCoursesStore = defineStore('CoursesStore', {
    state: () => ({
        courses,
        sorting: {
            type: '',
            order: 'asc',
        },
        coursesCount: 0,
    }),
    actions: {
        selectSortType(type) {
            this.sorting.type = type;
        },
        selectSortDirection(direction) {
            this.sorting.order = direction;
        },
        changeCoursesCount(coursesLength) {
            this.coursesCount = coursesLength;
        }
    }
});
