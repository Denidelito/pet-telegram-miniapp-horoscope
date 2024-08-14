<script setup>
import {defineProps} from 'vue'
import { useRouter } from 'vue-router';
import SvgIcon from "./SvgIcon.vue";


const props = defineProps({
  title: String,
  dates: String,
  icon: String,
  sign: String
});

const router = useRouter();

const goToHoroscopeDetail = () => {
  router.push({ name: 'HoroscopeDetail', params: { sign: props.sign } });
};

</script>

<template>
  <div class="card" @click="goToHoroscopeDetail">
    <div class="card__icon">
      <svg-icon :name="icon" width="60" height="60"/>
    </div>
    <h3 class="card__title">{{title}}</h3>
    <p class="card__dates">{{dates}}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  color-scheme: light dark;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
  transition: .3s;

  &:hover {
    transform: scale(1.05);
  }

  &__title {
    font-size: 1.2rem;
    margin: 0 0 .4rem;
  }

  &__dates {
    font-size: .8rem;
    margin: 0;
  }
}

@media (prefers-color-scheme: light) {
  .card {
    box-shadow: 0 4px 15px 0 rgba(0, 175, 240, 0.1);
  }
}
</style>