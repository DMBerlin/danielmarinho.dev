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
<style scoped>
.programming-label {
  display: flex;
  font-size: 14px;
  font-family: Biotif-Regular, sans-serif;
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
  background-color: #212024;
}
.programming-icon {
  display: flex;
  align-content: center;
  padding: 8px;
  width: 18px;
  height: 18px;
}
.programming-card-selected {
  color: #fff;
  background-color: #212024;
}
.programming-card-default {
  color: #8f9ba8;
  background-color: transparent;
}
</style>
