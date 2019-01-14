<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    font-family:'Open Sans', system_ui, _apple_system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans_serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
  }
</style>
