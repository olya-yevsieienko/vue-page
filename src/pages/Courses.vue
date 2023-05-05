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
import Cours from '@/components/Cours.vue';

export default ({
    name: 'Courses',
    components: {
        Cours
    },
    setup() {
        const coursesStore = useCoursesStore();
        const sidebarStore = useSidebarStore();

        return { coursesStore, sidebarStore }
    },
    computed: {
        courses() {
            let visibleCourses = this.coursesStore.courses;

            if (this.sidebarStore.selectedItemOption) {
                visibleCourses = this.coursesStore.courses.filter(cours => (
                    cours.name === this.sidebarStore.selectedItemOption
                ))
                this.coursesStore.changeCoursesCount(visibleCourses.length);
            }

            return visibleCourses;
        }
    }
})
</script>

<style lang="scss" scoped>
.courses {
    &-enter-active {
        transition: all 0.5s ease-out;
    }

    &-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    &-enter-from,
    &-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
}
</style>