<script setup lang="ts">
const props = defineProps<{
  quote: string;
}>();
</script>
<template lang="pug">
div.flex.justify-center.items-center
  div.blockquote.w-full
    p {{ props.quote }}
</template>
<style scoped lang="scss">
.blockquote {
  display: flex;
  border-left: solid 6px $--colors-hover;
  padding: 4px 0 4px 32px;
  margin: 16px 0;
  text-align: justify;
}

.blockquote > p {
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: $--colors-secondary;
}
</style>
