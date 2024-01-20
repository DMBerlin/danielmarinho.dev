<script setup lang="ts">
import { computed, ref } from "vue";

const labelIndex = ref(0);

const props = defineProps<{
  labels: string[];
}>();

const rotate = () => {
  labelIndex.value =
    labelIndex.value === props.labels.length - 1
      ? (labelIndex.value = 0)
      : labelIndex.value + 1;
};

const currentLabel = computed(() => props.labels.at(labelIndex.value));
</script>
<template lang="pug">
span
  label(class="text-highlight" @click="rotate") {{ currentLabel }}
</template>
<style scoped lang="scss">
.label-fade-enter-active,
.label-fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.label-fade-enter,
.label-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.active {
  opacity: 1;
  transform: translateY(0);
}
label {
  padding: 6px;
  margin: 6px;
  color: $--colors-primary;
  border-radius: 8px;
  transition: all linear 0.3s;
  font-weight: bold;
}
label:hover {
  cursor: pointer;
  background-color: $--colors-hover;
}
</style>
