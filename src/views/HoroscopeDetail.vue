<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import { useUserStore } from '../store/userStore.js';
import { computed, onMounted, ref } from 'vue';
import { MainButton } from "vue-tg";
import SvgIcon from "../components/SvgIcon.vue";

const route = useRoute();
const router = useRouter();
const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const sign = route.params.sign;
const language = computed(() => userStore.language);
const textBtn = computed(() => language.value === 'ru' ? 'Вернуться' : 'Return');

const isLoading = ref(true);

const zodiacSignInfo = computed(() => {
  const signData = horoscopeStore.zodiacSignsData[sign];
  return {
    name: signData.name[language.value],
    dates: signData.dates[language.value],
    icon: signData.icon,
  };
});

const horoscope = computed(() => horoscopeStore.horoscope);

onMounted(async () => {
  isLoading.value = true;
  await horoscopeStore.fetchHoroscope(sign, language.value === 'ru' ? 'original' : 'translated');
  isLoading.value = false;
  addSwipeListener();
});

function returnMainPage() {
  router.push('/');
}

function addSwipeListener() {
  const detailElement = document.querySelector('.detail');

  if (!detailElement) return;

  let startX;

  detailElement.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  detailElement.addEventListener('touchmove', (e) => {
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    if (diffX > 50) {
      returnMainPage();
    }
  });
}
</script>

<template>
  <div class="detail">
    <svg-icon class="detail__icon" :name="zodiacSignInfo.icon" width="60" height="60"/>
    <h2 class="detail__title">{{ zodiacSignInfo.name }}</h2>
    <p class="detail__dates">{{ zodiacSignInfo.dates }}</p>
    <div v-if="isLoading" class="skeleton">
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
    <p class="detail__text" v-else>{{ horoscope.horoscope }}</p>
    <MainButton :text="textBtn" @click="returnMainPage" />
  </div>
</template>

<style scoped lang="scss">
.detail {
  padding: 25px 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 175, 240, 0.10);

  &__icon {
    stroke: #2395FF;
  }

  &__title {
    font-size: 1.6rem;
    margin: 0 0 .4rem;
  }

  &__dates {
    font-size: .8rem;
    margin: 0;
  }

  &__text {
    font-size: 1rem;
  }
}

.skeleton {
  &-line {
    height: 1rem;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
    margin-bottom: 10px;

    &.short {
      width: 70%;
    }
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
