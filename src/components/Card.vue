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
  <div class="card">
    <div class="card__content">
      <svg-icon class="card__icon" :name="icon" width="42" height="42"/>
      <div>
        <p class="card__title">{{title}}</p>
        <p class="card__dates">{{dates}}</p>
      </div>
    </div>
    <div class="card__nav">
      <button class="card__btn" @click="goToHoroscopeDetail">
        Открыть
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 25px 15px;
  border-radius: 15px;
  background-color: white;
  transition: .3s;
  box-shadow: 0 4px 15px rgba(0, 175, 240, 0.10);

  &:hover {
    transform: scale(1.05);
  }

  &__content {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 15px;
  }

  &__icon {
    stroke: #2395FF;
  }

  &__title {
    color: #9A9A9A;
    font-size: 1.2rem;
    margin: 0 0 .4em;
  }

  &__dates {
    color: #C4C4C4;
    font-size: 1rem;
    margin: 0;
  }

  &__btn {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #2395FF;
    border: 1px solid #2395FF;
    background-color: transparent;
  }
}
</style>