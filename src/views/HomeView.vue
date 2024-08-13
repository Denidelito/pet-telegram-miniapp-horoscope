<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';

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

loadHoroscope('aries');
</script>

<template>
  <div>
    {{horoscope}}
  </div>
</template>

<style scoped>
</style>
