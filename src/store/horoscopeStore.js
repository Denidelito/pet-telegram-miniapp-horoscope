import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useHoroscopeStore = defineStore('horoscopeStore', () => {
    const horoscope = ref(null);
    const zodiacSignsData = ref({
        aries: {
            name: { ru: 'Овен', en: 'Aries' },
            dates: { ru: '21 марта - 19 апреля', en: 'March 21 - April 19' },
            icon: 'aries'
        },
        taurus: {
            name: { ru: 'Телец', en: 'Taurus' },
            dates: { ru: '20 апреля - 20 мая', en: 'April 20 - May 20' },
            icon: 'taurus'
        },
        gemini: {
            name: { ru: 'Близнецы', en: 'Gemini' },
            dates: { ru: '21 мая - 20 июня', en: 'May 21 - June 20' },
            icon: 'gemini'
        },
        cancer: {
            name: { ru: 'Рак', en: 'Cancer' },
            dates: { ru: '21 июня - 22 июля', en: 'June 21 - July 22' },
            icon: 'cancer'
        },
        leo: {
            name: { ru: 'Лев', en: 'Leo' },
            dates: { ru: '23 июля - 22 августа', en: 'July 23 - August 22' },
            icon: 'leo'
        },
        virgo: {
            name: { ru: 'Дева', en: 'Virgo' },
            dates: { ru: '23 августа - 22 сентября', en: 'August 23 - September 22' },
            icon: 'virgo'
        },
        libra: {
            name: { ru: 'Весы', en: 'Libra' },
            dates: { ru: '23 сентября - 22 октября', en: 'September 23 - October 22' },
            icon: 'libra'
        },
        scorpio: {
            name: { ru: 'Скорпион', en: 'Scorpio' },
            dates: { ru: '23 октября - 21 ноября', en: 'October 23 - November 21' },
            icon: 'scorpio'
        },
        sagittarius: {
            name: { ru: 'Стрелец', en: 'Sagittarius' },
            dates: { ru: '22 ноября - 21 декабря', en: 'November 22 - December 21' },
            icon: 'sagittarius'
        },
        capricorn: {
            name: { ru: 'Козерог', en: 'Capricorn' },
            dates: { ru: '22 декабря - 19 января', en: 'December 22 - January 19' },
            icon: 'capricorn'
        },
        aquarius: {
            name: { ru: 'Водолей', en: 'Aquarius' },
            dates: { ru: '20 января - 18 февраля', en: 'January 20 - February 18' },
            icon: 'aquarius'
        },
        pisces: {
            name: { ru: 'Рыбы', en: 'Pisces' },
            dates: { ru: '19 февраля - 20 марта', en: 'February 19 - March 20' },
            icon: 'pisces'
        },
    });

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
        zodiacSignsData,
    };
});
