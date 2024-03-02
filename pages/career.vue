<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useHead } from "@unhead/vue";
import clipboard from "clipboardy";
import { useRoute } from "vue-router";
import TextQuote from "~/components/TextQuote.vue";
import GradientTitle from "~/components/GradientTitle.vue";
import ReactiveButton from "~/components/ReactiveButton.vue";
import CarrouselLabelButton from "~/components/CarrouselLabelButton.vue";
import CareerExperienceCard from "~/components/Career/ExperienceCard.vue";
import { useExperiences } from "~/composables/useExperiences";
import { usePublicConfig } from "~/composables/usePublicConfig";
import { useNavigationStateHandler } from "~/composables/useNavigation";
import { EventName } from "~/types/useLogEvent";
import { useLogEvent } from "~/composables/useLogEvent";
import copyPasteIcon from "~/assets/icons/copy-bio.json";
import downloadIcon from "~/assets/icons/download.json";
import successIcon from "~/assets/icons/success.json";
import settingUp from "~/assets/icons/setting-up.json";
import { useNewTab } from "~/composables/useNewTab";
import { useFiles } from "~/composables/useFiles";
import { useResend } from "~/composables/useResend";

const route = useRoute();
const config = usePublicConfig();
const description = ref(
  'That\'s when I realized that web engineering is my one true passion! It was like a light bulb moment that made my heart go, "click!"',
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
const companyLabels = ref([]);
const experiences = await useExperiences().then((experiences) => {
  isLoading.value = false;
  companyLabels.value = experiences.map((experience) => experience.companyName);
  return experiences;
});
const downloadResume = ref(async () => {
  const cvFilePath = await useFiles();
  await useNewTab(cvFilePath);
  await useResend();
  logEvent.emit(EventName.RESUME_DOWNLOADED);
});
const copyBio = ref(async () => {
  await clipboard.write(description.value);
  logEvent.emit(EventName.BIO_COPIED);
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
          div.text-area
            span.profile-pic
            p.pb-5 Hello there! 👋
            p.pb-5 I'm Daniel Marinho, a Computer Scientist Bachelor and Software Engineer living in <label class="text-highlight">Brazil</label>. 🏖️
            p.pb-5 I've already had the opportunity to work in a lot of different companies, such as
              CarrouselLabelButton(:labels="companyLabels")
              label .
            p.pb-5 I developed a passion for computers in high school. Back then, I was the person who created static web pages for fun. Most of my social activities revolved around the school <label class="text-highlight">basketball team</label>, where I played as a center with my school mates. 🏀
        div.flex.justify-start.items-start
          div.text-area
            p.pb-5 My journey into the world of programming began with the classics: HTML and CSS (yeah, I know, let's not dwell on that, shall we? 😂). It was like learning <label class="text-highlight">the alphabet of the digital realm</label>.
            p.pb-5 Then, I ventured into the realm of PHP during the Joomla era, which felt like unlocking a secret code. And a few years down the road, I took a thrilling leap into the realm of JavaScript, riding the waves of frameworks like jQuery. 🚀🌟
            p.pb-5 {{ description }}
      section
        p.section-title Bio
        p.section-paragraph Here you can find a little bit of my professional background and companies I worked for.
      section
        TextQuote(:quote="description")
      section.flex.justify-end.items-end
        ReactiveButton(
          ald="Copy Bio"
          label="Copy Bio"
          :icon="copyPasteIcon"
          :on-click-icon="successIcon"
          :reactive-anim-time="2020"
          :callback="copyBio"
        )
        p.text-gray-400.text-xl.mx-4.pb-2  •
        ReactiveButton(
          ald="Download"
          label="Download Resumé"
          :icon="downloadIcon"
          :on-click-icon="settingUp"
          :reactive-anim-time="2020"
          :callback="downloadResume"
        )
      section
        p.section-title Career
        template(v-if="isLoading")
        template(v-else)
          CareerExperienceCard(
            v-for="experience in experiences"
            :key="experience.id"
            :company-name="experience.companyName"
            :company-url="experience.companyUrl"
            :company-logo="experience.companyLogo"
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
.profile-pic {
  float: right;
  width: 20em;
  height: 20em;
  border-radius: 8px;
  background-image: url("/static/img/profile-pic.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(10%);
  margin: 20px 20px;
}

@media screen and (max-width: 768px) {
  .text-area {
    line-height: 26px;
  }
  .presentation-area {
    flex-direction: column;
  }
  .profile-pic {
    width: 12em;
    height: 12em;
    margin: 0 0 8px 32px;
  }
}
</style>
