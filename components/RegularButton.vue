<script setup lang="ts">
const props = defineProps<{
  icon: string;
  label: string;
  alt?: string;
  callback?: Function;
}>();
</script>
<template lang="pug">
button(@click="props.callback").btn-standard
  img(:src="props.icon" :alt="props.alt")
  span {{ props.label }}
</template>
<style scoped>
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
  background-color: #303030;
}
.btn-standard img {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.btn-standard span {
  color: #f1f1f1;
  padding: 10px 12px;
  font-weight: bold;
}
</style>
