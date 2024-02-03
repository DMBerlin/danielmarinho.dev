<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
import { useAppState } from "~/composables/useAppState";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import { usePublicConfig } from "~/composables/usePublicConfig";
import GradientTitle from "~/components/GradientTitle.vue";
import { useExperiences } from "~/composables/useExperiences";

const config = usePublicConfig();
const route = useRoute();
const description = ref("Passioned about Web Technology.");
const fullPath = config.root + route.fullPath;

useHead({
  title: config.siteAuthor,
  meta: [
    { property: "og:title", content: config.siteAuthor },
    { name: "description", content: description.value },
    { property: "og:description", content: description.value },
    { name: "url", content: fullPath },
    { property: "og:url", content: fullPath },
  ],
});

const state = useAppState();
const { isWindows } = useDevice();
const openMenu = () => {
  state.value.navigation.enabled = true;
};

const experiences = await useExperiences();

const currentExperience = experiences.at(0);

onBeforeMount(() => useNavigationStateHandler());
</script>
<template lang="pug">
div.flex-grow
  div.height-to
    div.card.flex-col
      div.max-w-960px.name-header.py-6
        GradientTitle(
          title="Daniel Marinho"
          left-color="#a163f1"
          right-color="#3498ea"
          size="4.5rem"
        )
      div.max-w-960px
        p.my-title {{ currentExperience.jobTitle }} at
          span(@click="useNewTab(currentExperience.companyUrl)").my-company.underline.font-bold.px-2.cursor-pointer {{ currentExperience.companyName }}.
        p.my-label {{ description }}
      div.max-w-960px
        div(@click="openMenu").flex.justify-center.items-center.h-3px.my-8.cursor-pointer.shortcut-btn
          template(v-if="isWindows")
            div.font-bold.text-xl.cmd-label Press
            div.font-bold.text-xl.keyboard-btn ctrl
            div.font-bold.text-xl.py-2.cmd-label +
            div.font-bold.text-xl.keyboard-btn m
            div.font-bold.text-xl.py-2.cmd-label to begin
          template(v-else)
            div.font-semibold.text-xl.py-2.tap-to-start-label Tap to start
            span.tap-start-icon
</template>
<style scoped lang="scss">
.tap-to-start-label {
  font-family: $--fonts-body;
  color: $--colors-primary;
}

.name-header {
  text-align: center;
  font-weight: 600;
  line-height: 1;
}

.my-title {
  color: $--colors-primary;
  font-family: $--fonts-body;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  padding: 8px 0;
  width: auto;
}

.my-label {
  color: $--colors-secondary;
  font-family: $--fonts-body;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
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

.cmd-label {
  color: $--colors-primary;
  font-family: $--fonts-body;
}

.keyboard-btn {
  display: block;
  background-color: $--colors-secondary;
  color: $--colors-background;
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
  background-color: $--colors-hover;
}

@media screen and (max-width: 768px) {
  .card {
    max-width: 18em;
  }
}
</style>
