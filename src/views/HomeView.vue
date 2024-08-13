<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import { MainButton } from 'vue-tg'
import SvgIcon from "../components/SvgIcon.vue";

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const selectedSign = ref(null);
const zodiacSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
const horoscope = computed(() => horoscopeStore.horoscope);

const isBackButtonVisible = ref(true);

const loadHoroscope = (sign) => {
  selectedSign.value = sign;

  const language = userStore.language === 'ru' ? 'original' : 'translated';

  horoscopeStore.fetchHoroscope(sign, language);
};

function handleBackButton() {
  isBackButtonVisible.value = false;
}
</script>

<template>
  <div>
    <svg-icon name="aries"/>
  </div>
</template>

<style scoped>
</style>
