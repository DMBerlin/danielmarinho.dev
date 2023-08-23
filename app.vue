<template lang="pug">
NuxtLayout
  NuxtPage
</template>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: $--colors-background;
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
