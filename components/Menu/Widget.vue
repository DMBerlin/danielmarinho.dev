<script setup lang="ts">
import { ref, computed } from "vue";
import { ItemType } from "~/types/useMenu";
import { menuItems } from "~/composables/useMenu";
import { useAppState } from "~/composables/useAppState";

const items = menuItems();
const state = useAppState();

const searchInput = ref("");
const inputHandler = ref((value) => (searchInput.value = value));
const hideNavigation = ref(() => (state.value.navigation.enabled = false));

const goTo = items.filter((item) => item.type === ItemType.GO_TO);
const general = items.filter((item) => item.type === ItemType.GENERAL);

const searchResults = computed(() =>
  items.filter((item) =>
    item.label.toLowerCase().includes(searchInput.value.toLowerCase()),
  ),
);
</script>
<template lang="pug">
div(@click.self="hideNavigation").bg.flex.justify-center.items-center
  div.modal.mirror.overflow-auto
    MenuSearchInput(@search-handler="inputHandler")
    template(v-if="searchInput && searchInput.length > 0" )
      template(v-for="item in searchResults")
        MenuListItem(
          :icon="item.icon"
          :label="item.label"
          :shortcut="item.shortcut"
          :callback="item.callback"
          @click="hideNavigation"
        ).border-bottom
    template(v-else)
      span.section-title GENERAL
      template(v-for="item in general")
        MenuListItem(
          :icon="item.icon"
          :label="item.label"
          :shortcut="item.shortcut"
          :callback="item.callback"
          @click="hideNavigation"
        ).border-bottom
      span.section-title GO TO
      template(v-for="item in goTo")
        MenuListItem(
          :icon="item.icon"
          :label="item.label"
          :shortcut="item.shortcut"
          :callback="item.callback"
          @click="hideNavigation"
        ).border-bottom
</template>
<style scoped>
.section-title {
  padding: 8px 16px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f1f1f1;
  font-family: "Biotif", sans-serif;
  font-weight: lighter;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  animation: bgFader ease 0.5s;
}
.modal {
  padding: 6px;
  width: 600px;
  height: 440px;
  border-radius: 8px;
  background-color: #303030;
}
.border-bottom {
  border-bottom: #18181b 1px solid;
}
.mirror {
  border-radius: 8px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: rgba(35, 35, 35, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  animation: growAndShrink 0.3s;
  scrollbar-width: thin;
}

.mirror::-webkit-scrollbar {
  width: 4px;
}

.mirror::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.mirror::-webkit-scrollbar-thumb {
  background-color: #303030;
  outline: 1px solid #18181b;
}

@keyframes bgFader {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@keyframes growAndShrink {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
../composables/useMenu../composables/useState
