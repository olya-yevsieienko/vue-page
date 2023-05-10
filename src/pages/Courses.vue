<template>
    <div class="courses">
        <Cours
            v-for="cours in courses"
            :key="cours.id"
            :cours="cours"
        />
    </div>
</template>

<script>
import { useCoursesStore } from '@/stores/CoursesStore';
import { useSidebarStore } from '@/stores/SidebarStore';
import { useSearchStore } from '@/stores/SearchStore';
import Cours from '@/components/Cours.vue';
import sortCourses from '@/assets/helpers/sortCourses';

export default ({
    name: 'Courses',
    components: {
        Cours
    },
    setup() {
        const coursesStore = useCoursesStore();
        const sidebarStore = useSidebarStore();
        const searchStore = useSearchStore();

        return { coursesStore, sidebarStore, searchStore }
    },
    // watch: {
    //     
    // },
    computed: {
        courses() {
            let visibleCourses = this.coursesStore.courses;

            if (this.sidebarStore.selectedItemOption) {
                visibleCourses = this.coursesStore.courses.filter(cours => (
                    cours.name === this.sidebarStore.selectedItemOption
                ))
                this.coursesStore.changeCoursesCount(visibleCourses.length);
            }

            
            if (this.coursesStore.sorting.type) {
                visibleCourses = sortCourses(
                    this.coursesStore.sorting.type,
                    this.coursesStore.sorting.order,
                    visibleCourses
                )
            }
            
            if (this.searchStore.searchQuery) {
                visibleCourses = [...visibleCourses].filter(cours => (
                    cours.name.toLowerCase().includes(this.searchStore.searchQuery)
                ))
            }

            return visibleCourses;
        }
    }
})
</script>
