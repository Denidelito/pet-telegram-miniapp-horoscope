<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import { BackButton, MainButton, Popup } from 'vue-tg'

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const selectedSign = ref(null);
const zodiacSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
const horoscope = computed(() => horoscopeStore.horoscope);

const loadHoroscope = (sign) => {
  selectedSign.value = sign;

  const language = userStore.language === 'ru' ? 'original' : 'translated';

  horoscopeStore.fetchHoroscope(sign, language);
};



</script>

<template>
  <div>
    {{userStore.language}}
  </div>
</template>

<style scoped>
</style>
