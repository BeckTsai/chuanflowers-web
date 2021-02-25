<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&family=Noto+Serif+TC:wght@600&display=swap');

html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Averia Serif Libre', cursive, 'Noto Serif TC', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $grey3;
  user-select: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img {
  max-width: initial !important;
}

.serif-text {
  font-family: 'Noto Serif TC', serif;
}
</style>
