<script setup lang="ts">
import { useNewTab } from "~/composables/useNewTab";
import { useFooterItems } from "~/composables/useFooter";
const footerItems = useFooterItems();
</script>
<template lang="pug">
div.h-10
  div.flex.items-center.justify-center
    template(v-for="(item, index) of footerItems" :key="index")
      div(@click="useNewTab(item.url)").flex.items-center.justify-center.px-2.svg-icon
        p.footer-link.text-sm {{ item.label }}
        svg(width="18px" height="18px" viewBox="0 0 35 35").mt-1.mx-2.footer-icon
          path(:d="item.icon")
</template>
<style scoped lang="scss">
.footer-icon {
  display: block;
  width: 18px;
  height: 18px;
}
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
  .footer-icon {
    width: 24px;
    height: 24px;
  }
  .svg-icon {
    display: flex;
    align-items: center;
    vertical-align: center;
    fill: $--colors-primary;
  }
}
</style>
