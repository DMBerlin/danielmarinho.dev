<script setup lang="ts">
import { computed, ref } from "vue";
import { TechStackEnum } from "~/types/techStackCard";
import { useAppState } from "~/composables/useAppState";
const props = defineProps<{
  id: TechStackEnum;
  icon: string;
  label: string;
  selected?: boolean;
}>();
const state = useAppState();
const programmingIcon = ref(`background-image: url(${props.icon})`);
const isSelected = computed(() => props.selected === true);
const updateSkillFilter = (cardId) =>
  (state.value.projects.stackFilter[cardId] =
    !state.value.projects.stackFilter[cardId]);
</script>
<template lang="pug">
div.programming-card.flex-row.items-center.justify-around.mx-1(@click="updateSkillFilter(props.id)" :class="isSelected ? 'programming-card-selected' : 'programming-card-default'")
  div.programming-icon(:style="programmingIcon")
  p.programming-label {{ props.label }}
</template>
<style scoped lang="scss">
.programming-label {
  display: flex;
  font-size: 14px;
  font-family: $--fonts-body;
  padding: 5px;
}
.programming-card {
  display: flex;
  height: auto;
  width: auto;
  border-radius: 6px;
  padding: 4px 12px;
  margin: 8px;
  transition: all ease 0.3s;
}
.programming-card:hover {
  cursor: pointer;
  background-color: $--colors-hover;
}
.programming-icon {
  display: flex;
  align-content: center;
  padding: 8px;
  width: 18px;
  height: 18px;
}
.programming-card-selected {
  color: $--colors-primary;
  background-color: $--colors-hover;
}
.programming-card-default {
  color: $--colors-secondary;
  background-color: transparent;
}
</style>
