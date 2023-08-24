<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import { ref } from "vue";

const props = defineProps<{
  icon: JSON;
  label: string;
  shortcut: Array<string>;
  callback: Function;
}>();

const lottieRef = ref();
const animate = () => {
  lottieRef.value.goToAndPlay(0, true);
};

</script>
<template lang="pug">
div(
  @mouseenter="animate"
  @click="props.callback()"
).list-item
  div.flex.justify-center.items-center
    LottieAnimation(
      :animation-data="props.icon"
      :auto-play="false"
      ref="lottieRef"
      autoplay
    ).menu-icon
  div.w-full.px-6
    span.menu-label {{ props.label }}
  template(v-for="key in props.shortcut")
    div.shortcut-btn.flex.justify-center.items-center.mx-1
      p.text-sm.text-gray-400 {{ key }}
</template>
<style scoped lang="scss">
.menu-icon {
  width: 24px;
  height: 24px;
}
.menu-label {
  margin: 0;
  line-height: 32px;
  font-size: 16px;
  color: $--colors-secondary;
  font-family: $--fonts-body;
}
.shortcut-btn {
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: $--colors-primary;
  border: none;
  padding: 4px 8px;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s linear;
  padding: 10px 10px;
}
.list-item:hover {
  background-color: rgba(50, 50, 50, 0.7);
  cursor: pointer;
}
</style>
