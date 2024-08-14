<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/userStore.js';

const userStore = useUserStore();
const isEnglish = ref(userStore.language === 'en');

const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value;
  userStore.language = isEnglish.value ? 'en' : 'ru';
};
</script>

<template>
  <div class="switch" @click="toggleLanguage">
    <span class="switch__label switch__label--ru">RU</span>
    <div class="switch__track">
      <div class="switch__thumb" :class="{ 'switch__thumb--active': isEnglish }"></div>
    </div>
    <span class="switch__label switch__label--en">EN</span>
  </div>
</template>

<style scoped lang="scss">
.switch {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__track {
    width: 50px;
    height: 24px;
    background-color: #2395FF;
    border-radius: 12px;
    margin: 0 8px;
    position: relative;
    transition: background-color 0.3s;
  }
  &__thumb {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
  }
  &__thumb--active {
    transform: translateX(26px);
  }
  &__label {
    font-size: 1rem;
    color: var(--color-primary);
    user-select: none;
  }
}

</style>
