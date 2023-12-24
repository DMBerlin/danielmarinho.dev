<script setup lang="ts">
import { ref } from "vue";

const carrousel = ref([]);
const currentIndex = ref(0);
const props = defineProps<{
  labels: string[];
}>();
const carrouselHandler = () => {
  currentIndex.value =
    currentIndex.value === props.labels.length - 1 ? 0 : currentIndex.value + 1;
};
const rotate = () => {
  carrousel.value.pop();
  carrouselHandler();
  carrousel.value.push(props.labels.at(currentIndex.value));
};
onBeforeMount(() => {
  carrousel.value.push(props.labels.at(currentIndex.value));
});
</script>
<template lang="pug">
transition-group(tag="label" )
  label(v-for="(label, id) in carrousel" :key="id" @click="rotate").computed-label {{ label }}
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
.computed-label {
  padding: 6px;
  margin: 6px;
  color: $--colors-primary;
  background-color: $--colors-hover;
  border-radius: 8px;
}
.computed-label:hover {
  cursor: pointer;
}
</style>
