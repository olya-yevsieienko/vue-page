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
                        v-if="sidebarStore.selectedItem && routerStore.selectedSidebarLink === 'курсы'"
                        class="header__course-count"
                    >
                        {{ sidebarStore.coursesCount }}
                    </span>
                </div>
            </div>
            
            <Sorting
                v-if="routerStore.selectedSidebarLink === 'курсы'"
                :sortTypes="sortTypes"
            />
        </div>
    </div>
</template>

<script>
import { useSidebarStore } from '@/stores/SidebarStore';
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
        const sidebarStore = useSidebarStore();
        const routerStore = useRouterStore();

        return { sidebarStore, routerStore };
    },
    methods: {
        capitalazeWord
    },
    computed: {
        title() {
            let title = '';

            if (this.routerStore.selectedSidebarLink) {
                title = capitalazeWord(this.routerStore.selectedSidebarLink);
            }

            if (this.sidebarStore.selectedItem) {
                title += ` по ${this.sidebarStore.selectedItem}`;
            }

            return title;
        }
    }
};
</script>
