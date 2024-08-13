<script setup>
import {computed, ref} from "vue";
import {VueTelegramPlugin} from "vue-tg";
import {useUserStore} from "../store/userStore.js";

const userStore = useUserStore();
const lang = ref(userStore.language)
</script>

<template>
  <div>
    {{lang}}
  </div>
</template>

<style scoped>

</style>