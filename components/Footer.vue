<script setup lang="ts">
const footerItems = useFooterItems();
</script>
<template lang="pug">
div.h-10.py-2.bg-black
  div.flex.items-center.justify-center
    template(v-for="item of footerItems")
      div(@click="useNewTab(item.url)").flex.items-center.justify-center.px-2.svg-icon
        p.footer-link.text-sm.text-gray-500 {{ item.label }}
        svg(width="18px" height="18px" viewBox="0 0 35 35").mt-1.mx-2
          path(:d="item.icon")
</template>
<style scoped>
.footer-link {
  transition: all 0.3s ease;
}
.footer-link:hover {
  cursor: pointer;
  color: #e2e2e2;
}
.svg-icon {
  fill: #000;
  transition: all 0.3s ease;
}
.svg-icon:hover {
  fill: #e2e2e2;
}

@media screen and (max-width: 768px) {
  .footer-link {
    display: none;
  }
  .svg-icon {
    fill: #fff;
  }
}
</style>
