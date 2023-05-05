import { defineStore } from "pinia";

export const useRouterStore = defineStore('RouterStore', {
    state: () => ({
        selectedSidebarLink: '',
    }),
    actions: {
        changeSelectedSidebarLink(path) {
            this.selectedSidebarLink = path;
        },
    }
})