import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useWebApp } from 'vue-tg';

export const useUserStore = defineStore('userStore', () => {
    let initData = useWebApp();
    let language = computed(() => initData.initDataUnsafe?.user?.language_code || 'en');

    return {
        language,
    };
});