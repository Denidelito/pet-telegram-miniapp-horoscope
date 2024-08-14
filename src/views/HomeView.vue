<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import Card from "../components/Card.vue";
import Switch from "../components/Switch.vue";

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const zodiacSigns = ref(horoscopeStore.zodiacSignsData);

const language = computed(() => userStore.language);
</script>

<template>
  <div>
    <nav class="app__nav">
      <Switch/>
    </nav>
    <div class="cards">
      <div v-for="(sign, index) in zodiacSigns" :key="index">
        <Card :title="sign.name[language]"
              :dates="sign.dates[language]"
              :icon="sign.icon"
              :sign="sign.icon"
              :lang="language"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
