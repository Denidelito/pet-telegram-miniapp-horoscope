<script setup>
import { computed, ref } from 'vue';
import { useUserStore } from '../store/userStore.js';
import { useHoroscopeStore } from '../store/horoscopeStore.js';
import Card from "../components/Card.vue";

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();

const zodiacSigns = ref(horoscopeStore.zodiacSignsData);

const language = userStore.language;
</script>

<template>
  <div class="row">
    <div class="col" v-for="(sign, index) in zodiacSigns" :key="index">
      <card :title="sign.name[language]"
            :dates="sign.dates[language]"
            :icon="sign.icon"
            :sign="sign.icon"
      />
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
