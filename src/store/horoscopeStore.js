import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useHoroscopeStore = defineStore('horoscopeStore', () => {
    const horoscope = ref(null);

    // Функция для получения данных гороскопа
    const fetchHoroscope = async (sign = '', language = 'original') => {
        try {
            const response = await axios.post('https://poker247tech.ru/get_horoscope/', {
                sign,
                language,
            });
            horoscope.value = response.data;
        } catch (error) {
            console.error('Ошибка при получении данных гороскопа:', error);
        }
    };

    return {
        horoscope,
        fetchHoroscope,
    };
});
