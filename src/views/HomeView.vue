<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import { MainButton } from 'vue-tg'
import SvgIcon from "../components/SvgIcon.vue";

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const selectedSign = ref(null);
const zodiacSigns = ref(horoscopeStore.zodiacSignsData);
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
    {{zodiacSigns}}
    <svg-icon name="aries"/>
  </div>
</template>

<style scoped>
</style>
