import { defineStore } from 'pinia';

interface STATE {
    locale: string;
}

export const useAppStore = defineStore('appStore', {
    state: (): STATE => ({
        locale: 'en'
    }),
    actions: {},
    persist: {
        storage: persistedState.localStorage,
        paths: ['locale']
    }
})