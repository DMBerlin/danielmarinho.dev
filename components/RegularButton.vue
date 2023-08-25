<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import { ref } from "vue";
const props = defineProps<{
  icon: JSON;
  label: string;
  alt?: string;
  callback?: Function;
}>();
const lottieRef = ref();
const animate = () => lottieRef.value.goToAndPlay(0, true);
</script>
<template lang="pug">
button(
  @mouseenter="animate"
  @click="props.callback"
).btn-standard
  LottieAnimation(
    :animation-data="props.icon"
    :auto-play="false"
    ref="lottieRef"
    autoplay
  ).lottie-icon
  span {{ props.label }}
</template>
<style scoped lang="scss">
.lottie-icon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}
.btn-standard {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  transition: all ease 0.2s;
  border-radius: 6px;
  padding: 0 6px;
}
.btn-standard:hover {
  cursor: pointer;
  background-color: $--colors-hover;
}
.btn-standard img {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.btn-standard span {
  color: $--colors-primary;
  padding: 10px 12px;
  font-weight: bold;
}
</style>
