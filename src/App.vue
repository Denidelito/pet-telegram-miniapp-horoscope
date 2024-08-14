<script setup>
import SvgIcon from "./components/SvgIcon.vue";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <app-header/>
  <router-view/>
</template>

<style lang="scss">
.app {
  &__nav {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
  }
}
</style>
