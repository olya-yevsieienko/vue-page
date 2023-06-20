<template>
    <div class="header">
        <div class="header__content">
            <div class="header__block">
                <img
                    src="@/assets/image/logo.svg"
                    alt="OWLtop"
                    class="header__logo"
                />
                
                <div class="header__block">
                    <h2 class="header__title">{{ title }}</h2>
                    <Transition name="transition-opacity">
                        <span
                            v-if="sidebarStore.selectedItemOption && sidebarStore.selectedItem === 'курсы'"
                            class="header__course-count"
                        >
                            {{ coursesStore.coursesCount }}
                        </span>
                    </Transition>
                </div>
            </div>
            
            <Transition name="transition-opacity">
                <Sorting
                    v-if="sidebarStore.selectedItem === 'курсы'"
                    :sortTypes="sortTypes"
                />
            </Transition>
        </div>
    </div>
</template>

<script>
import { useCoursesStore } from '@/stores/CoursesStore';
import { useSidebarStore } from '@/stores/SidebarStore';
import Sorting from '@/components/Cours/CoursSorting.vue';
import sortTypes from '@/assets/models/sortTypes';
import capitalazeWord from '@/assets/helpers/capitalazeWord';

export default {
    name: 'TheHeader',
    components: {
        Sorting
    },
    created() {
        this.sortTypes = sortTypes;
    },
    setup() {
        const coursesStore = useCoursesStore();
        const sidebarStore = useSidebarStore();

        return { coursesStore, sidebarStore };
    },
    methods: {
        capitalazeWord
    },
    computed: {
        title() {
            let title = '';

            if (this.sidebarStore.selectedItem) {
                title = capitalazeWord(this.sidebarStore.selectedItem);
            }

            if (this.sidebarStore.selectedItemOption && title === 'Курсы') {
                title += ` по ${this.sidebarStore.selectedItemOption}`;
            }

            return title;
        }
    }
};
</script>
