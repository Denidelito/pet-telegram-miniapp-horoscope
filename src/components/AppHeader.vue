<script setup>
import { useUserStore } from '../store/userStore.js';
import SvgIcon from "./SvgIcon.vue";
import { computed } from "vue";

const userStore = useUserStore();
const language = computed(() => userStore.language);

const textTitle = computed(() => language.value === 'ru' ? 'Гороскоп' : 'Horoscope');

const formatDate = (date, lang) => {
  const options = { weekday: 'long', day: 'numeric', month: 'numeric' };
  return new Intl.DateTimeFormat(lang, options).format(date);
};

const currentDate = computed(() => {
  const date = new Date();
  return formatDate(date, language.value === 'ru' ? 'ru-RU' : 'en-US');
});
</script>

<template>
  <header class="app__header">
    <div>
      <h1 class="app__header__title">{{ textTitle }}</h1>
      <p class="app__header__subtitle">{{ currentDate }}</p>
    </div>
    <svg-icon class="app__header__icon" name="moon" width="75" height="75" />
  </header>
</template>

<style scoped lang="scss">
.app {
  &__header {
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
}
</style>
