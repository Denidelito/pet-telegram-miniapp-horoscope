<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import {MainButton, useWebApp} from 'vue-tg'
import SvgIcon from "../components/SvgIcon.vue";
import Card from "../components/Card.vue";

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
  <div class="row">
    <div class="col" v-for="(sign, index) in zodiacSigns" :key="index">
      <card :title="sign.name[language]"
            :dates="sign.dates[language]"
            :icon="sign.icon"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
}
.col {
  width: calc(50% - 5px);
}
</style>
