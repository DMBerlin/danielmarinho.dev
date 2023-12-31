<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import GradientTitle from "~/components/GradientTitle.vue";
import { getYearsOfMarriage } from "~/utils/dateUtils";
import { usePublicConfig } from "~/composables/usePublicConfig";

const config = usePublicConfig();
const route = useRoute();
const description = ref("Passioned about Web Technology.");
const fullPath = config.root + route.fullPath;

useHead({
  title: "About // " + config.siteAuthor,
  meta: [
    { property: "og:title", content: config.siteAuthor },
    { name: "description", content: description.value },
    { property: "og:description", content: description.value },
    { name: "url", content: fullPath },
    { property: "og:url", content: fullPath },
  ],
});

onBeforeMount(() => useNavigationStateHandler());

const yearsOfMarriage = computed(() => getYearsOfMarriage(config.marriageIn));
</script>
<template lang="pug">
div.flex.flex-col.flex-grow
  div.flex.justify-center.items-center
    div.wrapper
      section
        div.flex.justify-start.items-start.mt-10.mb-8
          GradientTitle(
            title="Husband. Friend. Engineer."
            left-color="#80ffea"
            right-color="#8aff80"
          )
      section
        div.flex.justify-start.items-start
          div.flex
            div.text-area
              p Within the world of <b class="text-white">code</b> and <b class="text-white">algorithms</b>, my passion knows no bounds as I meticulously craft solutions that breathe <b class="text-white">life</b> into <b class="text-white">innovation</b>. With each keystroke, I am filled with an electrifying sense of <b class="text-white">possibility</b> that ignites <b class="text-white">my soul</b>. But beyond the <b class="text-white">screens</b> and <b class="text-white">servers</b>, it's the warmth of my <b class="text-white">family</b> that truly lights up my <b class="text-white">world</b>.
              p It has been <b class="text-white">{{ yearsOfMarriage }}</b> wonderful years dedicated to nurturing a <b class="text-white">marriage</b> built on the foundations of <b class="text-white">love</b>, trust, and unwavering support. As I look forward, I dream of a home echoing with the joyous laughter and <b class="text-white">pitter-patter</b> of little feet. Beyond the lines of code, my <b class="text-white">aspirations</b> intertwine with visions of a bustling <b class="text-white">household</b>, a haven of <b class="text-white">boundless</b> love and <b class="text-white">imagination</b>.
              p <i>- Daniel Marinho</i>
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
  text-align: left;
  font-family: $--fonts-body;
}
.text-area > p {
  color: $--colors-secondary;
  margin: 16px 16px;
}

@media screen and (max-width: 768px) {
  .text-area {
    text-align: justify;
  }
}
</style>
