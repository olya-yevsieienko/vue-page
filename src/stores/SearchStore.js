import { defineStore } from "pinia";

export const useSearchStore = defineStore('SearchStore', {
    state: () => ({
        searchQuery: ''
    }),
    actions: {
        setSearchQuery(query) {
            this.searchQuery = query;
        }
    }
})