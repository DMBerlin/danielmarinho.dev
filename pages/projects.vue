<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useAppState } from "~/composables/useAppState";
import GradientTitle from "~/components/GradientTitle.vue";
import { useIntersects, useProjects } from "~/composables/useProjects";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import { useTechStack } from "~/composables/useTechStack";
import { usePublicConfig } from "~/composables/usePublicConfig";

const config = usePublicConfig();

useHead({
  title: "Projects // " + config.siteAuthor,
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
              p I'm a Software Engineer who's all about diving into exciting projects and making things happen. I'm not just about the usual stuff – I'm always looking for ways to make things better and team up with others to create something new and cool.
              p When it comes to tech, I've got a bunch of tools up my sleeve. I've used them to tackle different projects and put them to work in some pretty interesting ways, from hands-on experience to innovative implementations.
      section
        p.section-title Techstack
        TechStackWidget(@onUpdate="updateProjectList")
      section
        p.section-title Projects
        div.flex-col.justify-start.items-start
          template(v-for="project in projects" :key="project.id")
            div(v-show="projectFilterHandler(project)").project-card
              p.project-title {{ project.title }}
              p.project-description {{ project.description }}
              div.skill-wrapper
                template(v-for="stack in project.stack")
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
  color: #8f9ba8;
  text-align: left;
  font-family: $--fonts-body;
}
.text-area > p {
  margin: 16px 16px;
}
.section-title {
  color: #f2f2f2;
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
  color: #f1f1f1;
  font-family: $--fonts-code;
  border-bottom: 1px #8f9ba8 dotted;
}
.project-description {
  position: relative;
  font-weight: normal;
  font-size: 16px;
  color: #8f9ba8;
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
  color: #8f9ba8;
}
.skill-card {
  height: 100%;
  padding: 4px 12px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #08070b;
}

@media screen and (max-width: 768px) {
  .text-area {
    text-align: justify;
  }
}
</style>
