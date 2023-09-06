<script setup lang="ts">
import { useNewTab } from '~/composables/useNewTab';
import { getTimeDifference } from '~/utils/dateUtils';

const props = defineProps<{
  companyUrl: string;
  companyName: string;
  jobLocation: string;
  jobDescription: string[];
  jobTitle: string;
  startDate: Date;
  endDate: Date;
}>();
</script>
<template lang="pug">
div.career-card
  p.career-title {{ props.jobTitle }}
  div.flex.justify-start.items-start
    div(@click="useNewTab(props.companyUrl)").career-company {{ props.companyName }}
    div.career-location {{ props.jobLocation }}
  div
    div.career-period {{ getTimeDifference(props.startDate, props.endDate) }}
  div
    template(v-for="description in props.jobDescription")
      p.career-description {{ description }}
</template>
<style scoped lang="scss">
.career-title {
  font-size: 18px;
  color: $--colors-primary;
  font-family: $--fonts-heading;
}
.career-card {
  margin: 14px 0;
  padding: 14px 18px;
  border-radius: 6px;
  background-color: $--colors-background-secondary;
}
.career-period {
  font-weight: lighter;
  font-size: 16px;
  color: $--colors-secondary;
  font-family: $--fonts-body;
  margin: 0;
  line-height: 32px;
}
.career-location {
  position: relative;
  font-weight: normal;
  font-size: 16px;
  color: $--colors-secondary;
  font-family: $--fonts-body;
  margin: 0 8px;
  line-height: 32px;
  left: 0.4em;
}
.career-description {
  color: $--colors-secondary;
  font-family: $--fonts-body;
  font-size: 14px;;
}
.career-description::before {
  color: $--colors-secondary;
  content: "•";
  position: relative;
  padding-right: 6px;
}
.career-company {
  position: relative;
  font-size: 16px;
  color: $--colors-primary;
  font-family: $--fonts-body;
  cursor: pointer;
  transition: all ease 0.3s;
  line-height: 32px;
  border-bottom: $--colors-secondary 1px dotted;
}
.career-company::after {
  color: $--colors-secondary;
  content: "•";
  position: absolute;
  top: 0;
  right: -0.7em;
}
.career-company:hover {
  color: $--colors-secondary;
}
@media screen and (max-width: 768px) {
  .career-company {
    display: inline-flex;
  }
  .career-location {
    text-align: right;
    width: 100%;
  }
}
</style>
