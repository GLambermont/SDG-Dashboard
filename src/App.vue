
<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
  }
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

  // Base styling
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html,
  body,
  #app {
    min-height: 100vh;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

  .router-view {
    overflow: auto;
  }

  body {
    color: $sdg-c-copy-dark;
    font-family: $sdg-font-stack-copy;
    font-size: 16px;
    line-height: 1.5;
    background: top right no-repeat url('images/backgrounds/bg-shape_right.svg'),
                bottom left no-repeat url('images/backgrounds/bg-shape_left.svg');
  }

  // Typography
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: $sdg-c-heading-dark;
  }

  h1, .h1 {
    font-size: $sdg-font-size-h1;
    font-weight: 400;
    line-height: 1.25;
  }

  h2, .h2 {
    font-size: $sdg-font-size-h2;
    font-weight:  300;
    line-height: 1.35;
  }

  h3, .h3 {
    font-size: $sdg-font-size-h3;
    font-weight: 400;
    line-height: 1.4;
  }

  h4, .h4 {
    font-size: $sdg-font-size-h4;
    font-weight: 400;
    line-height: 1.5;
  }

  h5, .h5 {
    font-size: $sdg-font-size-h5;
    font-weight: 400;
    line-height: 1.5;
  }
  h6, .h6 {
    font-size: $sdg-font-size-h6;
    font-weight: 600;
    line-height: 1.5;
  }

  .caption {
    font-size: $sdg-font-size-caption;
  }

  .overline {
    font-size: $sdg-font-size-overline;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  pre,
  code, .code {
    font-family: $sdg-font-stack-system-mono;
  }

  .title-group {
    margin: 40px 0 24px 0;

    h1, .h1 { margin: 0.1em 0; }
    h2, .h2 { margin: 0.1em 0; }
    h3, .h3 { margin: 0.15em 0; }
    h4, .h4 { margin: 0.2em 0; }
    h5, .h5 { margin: 0.25em 0; }
    h6, .h6 { margin: 0.3em 0; }

    &.bottom-spacing {
      margin-bottom: 56px;
    }
  }

  // Utility
  .content-width-s,
  .content-width-m,
  .content-width-l {
    margin: 0 auto;

    @include media('<tablet') { padding: 0 $sdg-content-padding-s; }
    @include media('>=tablet') { padding: 0 $sdg-content-padding-m; }
    @include media('>=laptop') { padding: 0 $sdg-content-padding-l; }
  }

  .content-width-s { max-width: $sdg-content-width-s; }
  .content-width-m { max-width: $sdg-content-width-m; }
  .content-width-l { max-width: $sdg-content-width-l; }

  .text-dark {
    color: $sdg-c-copy-dark;

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
      color: $sdg-c-heading-dark;
    }
  }

  .text-light {
    color: $sdg-c-copy-light;

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
      color: $sdg-c-heading-light;
    }
  }
</style>
