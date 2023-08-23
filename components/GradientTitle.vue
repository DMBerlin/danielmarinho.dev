<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  leftColor: string;
  rightColor: string;
}>();

const gradientStyle = computed(
  () =>
    `background-image: linear-gradient(45deg, ${props.leftColor}, ${props.rightColor})`,
);
</script>
<template lang="pug">
div
  p(:style="gradientStyle").gradient-this {{ props.title }}
</template>
<style scoped lang="scss">
.gradient-this {
  font-family: $--fonts-heading;
  font-size: 48px;
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
