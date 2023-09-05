<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useHead } from "@unhead/vue";
import clipboard from "clipboardy";
import { useRoute } from "vue-router";
import TextQuote from "~/components/TextQuote.vue";
import { useNewTab } from "~/composables/useNewTab";
import GradientTitle from "~/components/GradientTitle.vue";
import RegularButton from "~/components/RegularButton.vue";
import ReactiveButton from "~/components/ReactiveButton.vue";
import CareerExperienceCard from "~/components/Career/ExperienceCard.vue";
import { useExperiences } from "~/composables/useExperiences";
import { usePublicConfig } from "~/composables/usePublicConfig";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import copyPasteIcon from "~/assets/icons/copy-bio.json";
import downloadIcon from "~/assets/icons/download.json";
import successIcon from "~/assets/icons/success.json";
import { useLogEvent } from "~/composables/useLogEvent";
import { EventNames } from "~/types/useLogEvent";

const route = useRoute();
const config = usePublicConfig();
const description = ref(
  "Web engineering is my true passion! When I'm not engrossed in coding, you'll likely find me immersed in documentaries and movies from the 80s or contributing on Open Source Communities.",
);
const fullPath = config.root + route.fullPath;

useHead({
  title: "Career // " + config.siteAuthor,
  meta: [
    { property: "og:title", content: config.siteAuthor },
    { name: "description", content: description.value },
    { property: "og:description", content: description.value },
    { name: "url", content: fullPath },
    { property: "og:url", content: fullPath },
  ],
});

const isLoading = ref(true);
const logEvent = useLogEvent();
const { cvFileUrl } = usePublicConfig();
const experiences = await useExperiences()
  .then((experiences) => {
    isLoading.value = false;
    return experiences;
  });
const downloadResume = ref(() => {
  logEvent.emit(EventNames.RESUME_DOWNLOADED);
  useNewTab(cvFileUrl);
});
const copyBio = ref(() => {
  logEvent.emit(EventNames.BIO_COPIED);
  clipboard.write(description.value);
});
onBeforeMount(() => useNavigationStateHandler());
</script>
<template lang="pug">
div.flex.flex-col.flex-grow
  div.flex.justify-center.items-center
    div.wrapper
      section
        div.flex.justify-start.items-start.mt-10.mb-8
          GradientTitle(
            title="Learn. Improve. Repeat."
            left-color="#ffff80"
            right-color="#ff80bf"
          )
      section
        div.flex.justify-start.items-start
          div.presentation-area
            div.flex.pr-4
              span.profile-pic
            div.flex
              div.text-area
                p.pb-5 Hi! I'm <label class="text-highlight">Daniel Marinho</label>, a Computer Scientist graduated from Brazil in late 2015. But my journey with computers started way back in my childhood, during a time when "GeoCities" was still a thing!
                p.pb-5 {{ description }}
      section
        p.section-title Bio
        p.section-paragraph Here you can find a little bit of my professional background and companies I worked for.
      section
        TextQuote(:quote="description")
      section.flex.justify-end.items-end
        ReactiveButton(:callback="copyBio" :icon="copyPasteIcon" :on-click-icon="successIcon" :reactive-anim-time="2020" ald="Copy Bio" label="Copy Bio")
        p.text-gray-400.text-xl.mx-4.pb-2  •
        RegularButton(@click="downloadResume" :icon="downloadIcon" ald="Download" label="Download Resumé")
      section
        p.section-title Career
        template(v-if="isLoading")
        template(v-else)
          CareerExperienceCard(
            v-for="experience in experiences"
            :company-name="experience.companyName"
            :company-url="experience.companyUrl"
            :job-location="experience.jobLocation"
            :job-title="experience.jobTitle"
            :job-description="experience.jobDescription"
            :start-date="new Date(experience.startDate)"
            :end-date="new Date(experience.endDate)"
          )
      section
        div.py-16
    div.w-auto
</template>
<style scoped lang="scss">
.lottie-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 44px;
}
.lottie-icon {
  display: flex;
  width: 26px;
  height: 26px;
}
.wrapper {
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
}
.section-title {
  color: $--colors-primary;
  font-weight: bold;
  font-size: 1.5em;
  margin: 16px 0;
  font-family: $--fonts-heading;
}
.section-paragraph {
  color: $--colors-secondary;
  font-size: 16px;
  line-height: 32px;
  margin: 16px 0;
  font-family: $--fonts-body;
}
.text-highlight {
  color: $--colors-primary;
  font-weight: bold;
}
.text-area {
  font-size: 16px;
  line-height: 32px;
  color: $--colors-secondary;
  text-align: left;
  font-family: $--fonts-body;
}
.presentation-area {
  display: flex;
  justify-content: center;
}
.profile-pic {
  width: 18em;
  height: 18em;
  border-radius: 6px;
  background-image: url("/static/img/profile-pic.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  margin-right: 20px;
}

@media screen and (max-width: 768px) {
  .text-area {
    text-align: justify;
  }
  .presentation-area {
    flex-direction: column;
  }
  .profile-pic {
    margin: 0 0 32px 0;
  }
}
</style>
