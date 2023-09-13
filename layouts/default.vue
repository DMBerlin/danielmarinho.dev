<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useMenu } from "~/composables/useMenu";
import { KeyboardEvents } from "~/types/useEvent";
import { useAppState } from "~/composables/useAppState";
import { createEventListener } from "~/composables/useEvent";

const state = useAppState();
onBeforeMount(() =>
  createEventListener(KeyboardEvents.KEY_DOWN, useMenu(state)),
);
</script>
<template lang="pug">
div
  MenuWidget(v-if="state.navigation.enabled" )
  div.flex.flex-col.min-h-screen
    NavbarWidget
    slot
    Footer
</template>
