<script setup lang="ts">
import { ref, defineProps, onBeforeMount } from "vue";

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
