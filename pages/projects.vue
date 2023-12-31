<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
import { useAppState } from "~/composables/useAppState";
import GradientTitle from "~/components/GradientTitle.vue";
import { useIntersects, useProjects } from "~/composables/useProjects";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import { useTechStack } from "~/composables/useTechStack";
import { usePublicConfig } from "~/composables/usePublicConfig";

const config = usePublicConfig();
const route = useRoute();
const description = ref(
  "I'm a Software Engineer who's all about diving into exciting projects and making things happen. I'm not just about the usual stuff – I'm always looking for ways to make things better and team up with others to create something new and cool.",
);
const fullPath = config.root + route.fullPath;

useHead({
  title: "Projects // " + config.siteAuthor,
  meta: [
    { property: "og:title", content: config.siteAuthor },
    { name: "description", content: description.value },
    { property: "og:description", content: description.value },
    { name: "url", content: fullPath },
    { property: "og:url", content: fullPath },
  ],
});

const state = useAppState();
const techStack = useTechStack();
const projects = await useProjects();
const updateProjectList = ref(
  (techStack) => (state.value.projects.stackFilter = techStack),
);
const projectFilterHandler = (project): boolean => {
  if (state.value.projects.stackFilter.length === 0) return true;
  return useIntersects(state.value.projects.stackFilter, project.stack);
};

const getTechIcon = (techId: number): string => {
  const techMap = techStack.toMap();
  return techMap[techId].icon || "";
};

const getTechLabel = (techId: number): string => {
  const techMap = techStack.toMap();
  return techMap[techId].label || "";
};

onBeforeMount(() => useNavigationStateHandler());
</script>
<template lang="pug">
div.flex.flex-col.flex-grow
  div.flex.justify-center.items-center
    div.wrapper
      section
        div.flex.justify-start.items-start.mt-10.mb-8
          GradientTitle(
            title="Create. Commit. Push."
            left-color="#9580ff"
            right-color="#80ffea"
          )
      section
        div.flex.justify-start.items-start
          div.flex
            div.text-area
              p {{ description }}
              p When it comes to tech, I've got a bunch of tools up my sleeve. I've used them to tackle different projects and put them to work in some pretty interesting ways, from hands-on experience to innovative implementations.
      section
        p.section-title Techstack
        TechStackWidget(@on-update="updateProjectList")
      section
        p.section-title Projects
        div.flex-col.justify-start.items-start
          template(v-for="(project, index) in projects" :key="index")
            div(v-show="projectFilterHandler(project)").project-card
              p.project-title {{ project.title }}
              p.project-description {{ project.description }}
              div.skill-wrapper
                template(v-for="stack in project.stack" :key="stack")
                  div.skill-card
                    span.skill-icon(:style="`background-image: url(${getTechIcon(stack)})`")
                    p.skill-label {{ getTechLabel(stack) }}
</template>
<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
}
.text-area {
  font-size: 16px;
  line-height: 32px;
  color: $--colors-secondary;
  text-align: left;
  font-family: $--fonts-body;
}
.text-area > p {
  margin: 16px 16px;
}
.section-title {
  color: $--colors-primary;
  font-weight: bold;
  font-size: 24px;
  margin: 60px 0 0;
  font-family: $--fonts-heading;
}
.project-card {
  margin: 32px 16px;
}
.project-title {
  font-size: 18px;
  font-weight: bold;
  color: $--colors-primary;
  font-family: $--fonts-code;
  border-bottom: 1px dotted $--colors-secondary;
}
.project-description {
  position: relative;
  font-weight: normal;
  font-size: 16px;
  color: $--colors-secondary;
  font-family: $--fonts-body;
  line-height: 32px;
  margin: 16px 12px;
}
.skill-wrapper {
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
.skill-icon {
  display: flex;
  align-content: center;
  padding: 8px;
  width: 18px;
  height: 18px;
}
.skill-label {
  display: flex;
  font-size: 14px;
  font-family: $--fonts-body;
  padding: 5px;
  color: $--colors-secondary;
}
.skill-card {
  height: 100%;
  padding: 4px 12px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: $--colors-background-secondary;
}

@media screen and (max-width: 768px) {
  .text-area {
    text-align: justify;
  }
}
</style>
