<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import { ref } from "vue";
const props = defineProps<{
  icon: JSON;
  label: string;
  onClickIcon: JSON;
  reactiveAnimTime?: number;
  alt?: string;
  callback?: Function;
}>();
const activeState = ref(false);
const lottieIconRef = ref();
const lottieActionIconRef = ref();
const animateIconOnHover = () => {
  if (activeState.value === true) return;
  lottieIconRef.value.goToAndPlay(0);
};
const onClickHandler = () => {
  if (activeState.value === true) return;
  activeState.value = true;
  lottieActionIconRef.value.goToAndPlay(0);
  props.callback();
  setTimeout(() => (activeState.value = false), props.reactiveAnimTime || 0);
};
</script>
<template lang="pug">
button(
  @mouseenter="animateIconOnHover"
  @click="onClickHandler"
).btn-standard
  LottieAnimation(
    v-show="activeState === true"
    ref="lottieActionIconRef"
    autoplay
    :animation-data="onClickIcon"
    :auto-play="false"
  ).lottie-icon
  LottieAnimation(
    v-show="activeState === false"
    ref="lottieIconRef"
    autoplay
    :animation-data="icon"
    :auto-play="false"
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
