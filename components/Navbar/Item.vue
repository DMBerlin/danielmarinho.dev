<script setup lang="ts">
import { computed } from "vue";
import { useAppState } from "~/composables/useAppState";

const props = defineProps<{
  path: string;
  label: string;
}>();
const appState = useAppState();
const isCurrentRoute = computed(
  () => appState.value.appMenu.currentRoute === props.path,
);
</script>
<template lang="pug">
nuxt-link(:to="props.path")
  div.flex-col.justify-center.items-center
    p.text-sm.menu(:class="isCurrentRoute ? 'selected' : 'default'") {{ props.label }}
    div.w-full.flex.justify-center.items-center
      div.underline(:class="isCurrentRoute ? 'underline-selected' : 'underline-default'")

</template>
<style scoped lang="scss">
.menu {
  font-size: 12px;
  font-family: $--fonts-body;
  padding: 15px 15px;
  margin: 8px 15px;
  transition: all 0.3s ease;
  border-radius: 4px;
}
.selected {
  color: #f1f1f1;
}
.default {
  color: #505050;
}
.menu:hover {
  cursor: pointer;
  color: #e2e2e2;
  background-color: #303030;
}
.underline {
  display: flex;
  transition: all 0.3s ease;
  background-color: #f1f1f1;
  border-bottom: solid #f1f1f1 1px;
}
.underline-selected {
  width: 16px;
}
.underline-default {
  width: 0;
}
@media screen and (max-width: 768px) {
  .menu {
    margin: 8px 8px;
  }
}
</style>
