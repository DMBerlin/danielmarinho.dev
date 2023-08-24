<script setup lang="ts">
import { useNavigation } from "~/composables/useNavigation";

const navItems = useNavigation();
</script>
<template lang="pug">
div.h-20.py-2
  div.flex.items-center.justify-center
    template(v-for="navItem in navItems")
      NavbarItem(:path="navItem.path" :label="navItem.label")
</template>
