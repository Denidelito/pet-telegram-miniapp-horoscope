<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import Card from "../components/Card.vue";
import SvgIcon from "../components/SvgIcon.vue";

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const zodiacSigns = ref(horoscopeStore.zodiacSignsData);

const language = userStore.language;
</script>

<template>
  <div>
    <div class="banner">
      <div>
        <h1 class="banner__title">Гороскоп</h1>
        <p class="banner__subtitle">Вторник, 27.06</p>
      </div>
      <svg-icon class="banner__icon" name="moon" width="75" height="75"/>
    </div>
    <div class="cards">
      <div v-for="(sign, index) in zodiacSigns" :key="index">
        <card :title="sign.name[language]"
              :dates="sign.dates[language]"
              :icon="sign.icon"
              :sign="sign.icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(35,149,255);
  background: linear-gradient(90deg, rgba(35,149,255,1) 27%, rgba(31,129,254,1) 68%, rgba(24,89,253,1) 100%);
  color: white;
  text-align: left;
  border-radius: 36px;
  padding: 35px 25px;
  margin-bottom: 40px;

  &__title {
    font-size: 1.75rem;
    margin: 0 0 .6em;
  }

  &__subtitle {
    font-size: 1.125rem;
    margin: 0;
  }

  &__icon {
    stroke: white;
  }
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
