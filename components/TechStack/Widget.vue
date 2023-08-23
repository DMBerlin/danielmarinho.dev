<script setup lang="ts">
import { computed } from "vue";
import { useTechStack } from "~/composables/useTechStack";
import { useAppState } from "~/composables/useAppState";

const state = useAppState();
const techStack = useTechStack();
const cards = techStack.toArray();
const clearSelectionEnabled = computed(
  () => state.value.projects.stackFilter.length > 0,
);
const isSelected = (cardId: number): boolean =>
  state.value.projects.stackFilter[cardId] === true;
const clearSelection = (): void => {
  state.value.projects.stackFilter = [];
};
</script>
<template lang="pug">
div.flex-col.justify-start.items-start.max-w-520px
  div.carrousel
    template(v-for="card in cards")
      TechStackCard(:id="card.id" :label="card.label" :icon="card.icon" :selected="isSelected(card.id)")
    transition
      template(v-if="clearSelectionEnabled")
        div(@click="clearSelection").clear-btn
          div.clear-icon
          p.clear-label Clear All
</template>
<style scoped>
.carrousel {
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px;
  height: auto;
  flex-wrap: wrap;
}
.clear-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 2px 10px;
  margin: 8px;
  transition: all ease 0.3s;
  border-radius: 6px;
  border: solid 2px #212024;
}
.clear-btn:hover {
  cursor: pointer;
  background-color: #212024;
}
.clear-label {
  display: flex;
  font-size: 14px;
  font-family: Biotif-Regular, sans-serif;
  padding: 5px;
  color: #8f9ba8;
}
.clear-icon {
  display: flex;
  padding: 5px;
  width: 18px;
  height: 18px;
  background-image: url("/icons/clear-icon.svg");
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
