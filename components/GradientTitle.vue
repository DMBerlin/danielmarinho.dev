<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  size?: string;
  leftColor: string;
  rightColor: string;
  customGradient?: string;
}>();

const fontSize = props.size || "45px";
const gradientConfig =
  props.customGradient ||
  `linear-gradient(45deg, ${props.leftColor}, ${props.rightColor})`;
const gradientStyle = computed(
  () =>
    `
      background-image: ${gradientConfig};
      font-size: ${fontSize};
    `,
);
</script>
<template lang="pug">
div
  p(:style="gradientStyle").gradient-this {{ props.title }}
</template>
<style scoped lang="scss">
.gradient-this {
  font-family: $--fonts-heading;
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
