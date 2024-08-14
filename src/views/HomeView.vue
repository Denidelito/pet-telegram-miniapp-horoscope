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
const language = userStore.language;

const loadHoroscope = (sign) => {
  selectedSign.value = sign;

  const isTranslate = language === 'ru' ? 'original' : 'translated'

  horoscopeStore.fetchHoroscope(sign, isTranslate);
};

function handleBackButton() {
  isBackButtonVisible.value = false;
}
</script>

<template>
  <div>
    <div v-for="(signs, index) in zodiacSigns" :key="index">
      <svg-icon :name="signs.icon" width="60" height="60"/>
    </div>
  </div>
</template>

<style scoped>
</style>
