<script setup lang="ts">
import { ref } from "vue";

const inputText = ref("");
const emits = defineEmits(["search-handler"]);
const handleInput = () => emits("search-handler", inputText.value);
</script>
<template lang="pug">
input(
  type="text",
  placeholder="Search a command"
  v-model="inputText"
  @keyup="handleInput"
).rounded-lg.w-full.bg-transparent.border-none.select-none.outline-none.font-bold.text-lg.search-input
</template>
<style scoped lang="scss">
.search-input {
  font-weight: lighter;
  color: $--colors-command;
  font-family: $--fonts-body;
}
input[type="text"] {
  padding: 10px 15px;
  border-radius: 3px;
}
</style>
