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
                    <span
                        v-if="coursesStore.filter"
                        class="header__course-count"
                    >
                        {{ coursesStore.coursesCount }}
                    </span>
                </div>
            </div>
            
            <Sorting
                v-if="routerStore.path === 'курсы'"
                :sortTypes="sortTypes"
            />
        </div>
    </div>
</template>

<script>
import { useCoursesStore } from '@/stores/CoursesStore';
import { useRouterStore } from '@/stores/RouterStore';
import Sorting from '@/components/Sorting.vue';
import sortTypes from '@/assets/models/sortTypes';
import capitalazeWord from '@/assets/helpers/capitalazeWord';

export default {
    name: 'Header',
    components: {
        Sorting
    },
    created() {
        this.sortTypes = sortTypes;
    },
    setup() {
        const coursesStore = useCoursesStore();
        const routerStore = useRouterStore();

        return { coursesStore, routerStore };
    },
    methods: {
        capitalazeWord
    },
    computed: {
        title() {
            let title = '';
            if (this.routerStore.path) {
                title = capitalazeWord(this.routerStore.path);
            }

            if (this.coursesStore.filter) {
                title += ` по ${this.coursesStore.filter}`;
            }
            return title;
        }
    }
};
</script>
