<template lang="pug">
NuxtLayout
  NuxtPage
</template>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: $--colors-background;
  text-rendering: optimizeLegibility;
  font-feature-settings: "salt", "ss01", "ss03", "cv01", "cv02", "cv03", "cv04",
    "cv05", "cv06", "cv09", "cv10", "cv11";
}

body::-webkit-scrollbar {
  width: 0.35em;
  background-color: $--colors-background;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(50, 50, 50, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #505050;
  outline: 1px solid slategrey;
  border-radius: 5px;
}
</style>
