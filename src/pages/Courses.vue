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
import { useSidebarStore } from '@/stores/SidebarStore';
import Cours from '@/components/Cours.vue';

export default ({
    name: 'Courses',
    components: {
        Cours
    },
    setup() {
        const sidebarStore = useSidebarStore()

        return { sidebarStore }
    },
    computed: {
        courses() {
            if (this.sidebarStore.selectedItem) {
                const filteredCourses = this.sidebarStore.courses.filter(cours => (
                    cours.name === this.sidebarStore.selectedItem
                ))
                this.sidebarStore.coursesCount = filteredCourses.length;

                return filteredCourses;
               
            }

            return this.sidebarStore.courses;
        }
    }
})
</script>
