<script setup lang="ts">
const footerItems = useFooterItems();
</script>
<template lang="pug">
div.h-10
  div.flex.items-center.justify-center
    template(v-for="item of footerItems")
      div(@click="useNewTab(item.url)").flex.items-center.justify-center.px-2.svg-icon
        p.footer-link.text-sm {{ item.label }}
        svg(width="18px" height="18px" viewBox="0 0 35 35").mt-1.mx-2
          path(:d="item.icon")
</template>
<style scoped lang="scss">
.footer-link {
  font-family: $--fonts-body;
  color: $--colors-secondary;
  font-size: 15px;
  transition: all 0.3s ease;
}
.footer-link:hover {
  cursor: pointer;
  color: $--colors-primary;
}
.svg-icon {
  fill: transparent;
  transition: all 0.3s ease;
}
.svg-icon:hover {
  fill: $--colors-primary;
}

@media screen and (max-width: 768px) {
  .footer-link {
    display: none;
  }
  .svg-icon {
    fill: $--colors-primary;
  }
}
</style>
