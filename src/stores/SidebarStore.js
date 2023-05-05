import { defineStore } from "pinia";

export const useSidebarStore = defineStore('SidebarStore', {
    state: () => ({
        selectedItem: 'Курсы',
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