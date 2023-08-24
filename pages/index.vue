<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useAppState } from "~/composables/useAppState";
import { useNavigationStateHandler } from "~/composables/useNavigation";

const config = usePublicConfig();

useHead({
  title: config.siteAuthor,
});

const state = useAppState();
const { isWindows } = useDevice();
const openMenu = () => {
  state.value.navigation.enabled = true;
};
onBeforeMount(() => useNavigationStateHandler());
</script>
<template lang="pug">
div.flex-grow
  div.height-to
    div.card
      div.text-gray-300.max-w-960px
        p.my-name Daniel Marinho
        p.my-title Software Development Engineer, CS B.Sc.
        p.my-label Passioned about Web Technology.
        div(@click="openMenu").flex.justify-center.items-center.h-3px.my-8.cursor-pointer.shortcut-btn
          template(v-if="isWindows")
            div.font-bold.text-xl.py-2 Press
            div.font-bold.text-xl.keyboard-btn ctrl
            div.font-bold.text-xl.py-2 +
            div.font-bold.text-xl.keyboard-btn m
            div.font-bold.text-xl.py-2 to begin
          template(v-else)
            div.font-semibold.text-xl.py-2 Tap to start
            span.tap-start-icon
</template>
<style scoped lang="scss">
.my-name {
  font-family: $--fonts-heading;
  font-size: 32px;
  padding: 16px 0;
  width: auto;
}

.my-title {
  font-family: $--fonts-body;
  font-size: 18px;
  padding: 8px 0;
  width: auto;
}

.my-label {
  color: #8f9ba8;
  font-size: 16px;
  padding: 8px 0;
  font-weight: 400;
}

.tap-start-icon {
  display: flex;
  width: 18px;
  height: 18px;
  margin: 0 8px;
  background-image: url("/static/icons/arrow_right-icon.svg");
}

.height-to {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  height: 80vh;
}

.card {
  width: 680px;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keyboard-btn {
  display: block;
  background-color: #e2e2e2;
  color: #18181b;
  border-radius: 4px;
  padding: 8px 8px;
  margin: 0 8px;
  height: 24px;
  line-height: 5px;
}

.shortcut-btn {
  border-radius: 6px;
  transition: all 0.3s ease;
  padding: 0 8px;
}

.shortcut-btn:hover {
  background-color: #303030;
}

@media screen and (max-width: 768px) {
  .card {
    max-width: 18em;
  }
}
</style>
