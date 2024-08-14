import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useWebApp } from 'vue-tg';

export const useUserStore = defineStore('userStore', () => {
    let initData = useWebApp();
    let language = ref(initData.initDataUnsafe?.user?.language_code || 'en');

    const setLanguage = (newLanguage) => {
        language.value = newLanguage;
    };

    return {
        language,
        setLanguage,
    };
});
