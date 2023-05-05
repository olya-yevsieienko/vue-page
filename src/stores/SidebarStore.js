import { defineStore } from "pinia";

export const useSidebarStore = defineStore('SidebarStore', {
    state: () => ({
        selectedItem: '',
        selectedItemOption: '',
    }),
    actions: {
        selectSidebarLink(linkName) {
            this.selectedItem = linkName;
        },
        selectSidebarLinkOption(linkName) {
            this.selectedItemOption = linkName;
        },
    }
})