<script setup lang="ts">
const props = defineProps<{
  icon: string;
  label: string;
  shortcut: Array<string>;
  callback: Function;
}>();
</script>
<template lang="pug">
div(@click="props.callback()").list-item
  div.flex.justify-center.items-center
    img(:src="props.icon").menu-icon
  div.w-full.px-6
    span.menu-label {{ props.label }}
  template(v-for="key in props.shortcut")
    div.shortcut-btn.flex.justify-center.items-center.mx-1
      p.text-sm.text-gray-400 {{ key }}
</template>
<style scoped>
.menu-icon {
  width: 24px;
  height: 24px;
}
.menu-label {
  line-height: 32px;
  font-size: 14px;
  color: #e2e2e2;
  font-weight: lighter;
  font-family: Biotif-Regular, sans-serif;
}
.shortcut-btn {
  border-radius: 4px;
  background-color: #505050;
  color: #e2e2e2;
  border: none;
  width: 35px;
  height: 35px;
  text-align-all: center;
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
