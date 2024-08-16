import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useHoroscopeStore = defineStore('horoscopeStore', () => {
    const horoscope = ref(null);
    const zodiacSignsData = ref({
        aries: {
            name: { ru: 'Овен', en: 'Aries' },
            dates: { ru: '21 мар - 19 апр', en: 'Mar 21 - Apr 19' },
            icon: 'aries'
        },
        taurus: {
            name: { ru: 'Телец', en: 'Taurus' },
            dates: { ru: '20 апр - 20 мая', en: 'Apr 20 - May 20' },
            icon: 'taurus'
        },
        gemini: {
            name: { ru: 'Близнецы', en: 'Gemini' },
            dates: { ru: '21 мая - 20 июн', en: 'Ma 21 - Jun 20' },
            icon: 'gemini'
        },
        cancer: {
            name: { ru: 'Рак', en: 'Cancer' },
            dates: { ru: '21 июн - 22 июл', en: 'Jun 21 - Jul 22' },
            icon: 'cancer'
        },
        leo: {
            name: { ru: 'Лев', en: 'Leo' },
            dates: { ru: '23 июл - 22 авг', en: 'Jul 23 - Aug 22' },
            icon: 'leo'
        },
        virgo: {
            name: { ru: 'Дева', en: 'Virgo' },
            dates: { ru: '23 авг - 22 сен', en: 'Aug 23 - Sep 22' },
            icon: 'virgo'
        },
        libra: {
            name: { ru: 'Весы', en: 'Libra' },
            dates: { ru: '23 сен - 22 окт', en: 'Sep 23 - Oct 22' },
            icon: 'libra'
        },
        scorpio: {
            name: { ru: 'Скорпион', en: 'Scorpio' },
            dates: { ru: '23 окт - 21 нояб', en: 'Oct 23 - Nov 21' },
            icon: 'scorpio'
        },
        sagittarius: {
            name: { ru: 'Стрелец', en: 'Sagittarius' },
            dates: { ru: '22 нояб - 21 дек', en: 'Nov 22 - Dec 21' },
            icon: 'sagittarius'
        },
        capricorn: {
            name: { ru: 'Козерог', en: 'Capricorn' },
            dates: { ru: '22 дек - 19 янв', en: 'Dec 22 - Jan 19' },
            icon: 'capricorn'
        },
        aquarius: {
            name: { ru: 'Водолей', en: 'Aquarius' },
            dates: { ru: '20 янв - 18 фев', en: 'Jan 20 - Feb 18' },
            icon: 'aquarius'
        },
        pisces: {
            name: { ru: 'Рыбы', en: 'Pisces' },
            dates: { ru: '19 фев - 20 мар', en: 'Feb 19 - Mar 20' },
            icon: 'pisces'
        },
    });

    const fetchHoroscope = async (sign = '', language = 'original') => {
        try {
            const response = await axios.post('https://poker247tech.ru/get_horoscope/', {
                sign,
                language,
                "period": "today"
            });
            horoscope.value = response.data;
        } catch (error) {
            console.error('Ошибка при получении данных гороскопа:', error);
        }
    };

    return {
        horoscope,
        fetchHoroscope,
        zodiacSignsData,
    };
});
