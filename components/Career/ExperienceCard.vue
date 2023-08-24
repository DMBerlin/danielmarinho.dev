<script setup lang="ts">
import { useNewTab } from '~/composables/useNewTab';
import { getTimeDifference } from '~/utils/dateUtils';

const props = defineProps<{
  companyUrl: string;
  companyName: string;
  jobLocation: string;
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
</template>
<style scoped lang="scss">
.career-card {
  margin: 32px 0;
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
.career-title {
  font-size: 18px;
  color: $--colors-primary;
  font-family: $--fonts-body;
}
@media screen and (max-width: 768px) {
  .career-company {
    width: 100%;
  }
  .career-location {
    text-align: right;
    width: 100px;
  }
}
</style>
