<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import GradientTitle from "~/components/GradientTitle.vue";

onBeforeMount(() => useNavigationStateHandler());
</script>
<template lang="pug">
div.flex.flex-col.flex-grow.bg-black
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
              p <b class="text-white">Eight</b> wonderful years have been dedicated to nurturing a <b class="text-white">marriage</b> built on the foundations of <b class="text-white">love</b>, trust, and unwavering support. As I look forward, I dream of a home echoing with the joyous laughter and <b class="text-white">pitter-patter</b> of little feet. Beyond the lines of code, my <b class="text-white">aspirations</b> intertwine with visions of a bustling <b class="text-white">household</b>, a haven of <b class="text-white">boundless</b> love and <b class="text-white">imagination</b>.
              p <i>- Daniel Marinho</i>
</template>
<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
}
.text-area {
  font-size: 16px;
  line-height: 32px;
  text-align: left;
  font-family: Biotif-Regular, sans-serif;
}
.text-area > p {
  color: #8f9ba8;
  margin: 16px 16px;
}

@media screen and (max-width: 768px) {
  .text-area {
    font-size: 16px;
    line-height: 32px;
    text-align: justify;
    font-family: Biotif-Regular, sans-serif;
  }
}
</style>
