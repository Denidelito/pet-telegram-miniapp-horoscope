<script setup>
import {defineProps} from 'vue'
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  icon: {
    type: String
  },
  title: {
    type: String
  },
  dates: {
    type: String
  }
});
</script>

<template>
  <div class="card">
    <div class="card__icon">
      <svg-icon :name="icon" width="60" height="60"/>
    </div>
    <h3 class="card__title">{{title}}</h3>
    <p class="card__dates">{{dates}}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
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
    transform: scale(1.1);
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