<script setup>
import { useRoute } from 'vue-router';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import { useUserStore } from '../store/userStore.js';
import { computed, onMounted } from 'vue';
import SvgIcon from "../components/SvgIcon.vue";

const route = useRoute();
const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const sign = route.params.sign;
const language = userStore.language;

const zodiacSignInfo = computed(() => {
  const signData = horoscopeStore.zodiacSignsData[sign];
  return {
    name: signData.name[language],
    dates: signData.dates[language],
    icon: signData.icon,
  };
});

const horoscope = computed(() => horoscopeStore.horoscope);

onMounted(() => {
  horoscopeStore.fetchHoroscope(sign, language === 'ru' ? 'original' : 'translated');
});
</script>

<template>
  <div class="detail">
    <svg-icon :name="zodiacSignInfo.icon" width="60" height="60"/>
    <h2 class="detail__title">{{ zodiacSignInfo.name }}</h2>
    <p class="detail__dates">{{ zodiacSignInfo.dates }}</p>
    <p class="detail__text" v-if="horoscope">{{ horoscope.horoscope }}</p>
  </div>
</template>

<style scoped lang="scss">
.detail {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  color-scheme: light dark;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
  transition: .3s;

  &__title {
    font-size: 1.6rem;
    margin: 0 0 .4rem;
  }

  &__dates {
    font-size: 1rem;
    margin: 0;
  }

  &__text {
    font-size: .8rem;
  }
}

@media (prefers-color-scheme: light) {
  .card {
    box-shadow: 0 4px 15px 0 rgba(0, 175, 240, 0.1);
  }
}
</style>
