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
import Cours from '@/components/Cours.vue';

export default ({
    name: 'Courses',
    components: {
        Cours
    },
    setup() {
        const coursesStore = useCoursesStore()

        return { coursesStore }
    },
    computed: {
        courses() {
            if (this.coursesStore.filter) {
                const filteredCourses = this.coursesStore.courses.filter(cours => (
                    cours.name === this.coursesStore.filter
                ))
                this.coursesStore.coursesCount = filteredCourses.length;

                return filteredCourses;
               
            }
            console.log(this.$route.params);
            return this.coursesStore.courses
        }
    }
})
</script>
