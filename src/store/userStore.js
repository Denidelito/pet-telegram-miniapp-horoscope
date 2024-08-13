import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
    let initData = window.Telegram.WebApp.initDataUnsafe;
    let language = computed(() => initData.user?.language_code || 'en');

    return {
        language,
    };
});