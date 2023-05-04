import { defineStore } from "pinia";

export const useRouterStore = defineStore('RouterStore', {
    state: () => ({ path: '' }),
    actions: {
        changePath(path) {
            this.path = path;
        }
    }
})