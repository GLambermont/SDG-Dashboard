<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="button"
  >
    <slot></slot>
    <ArrowRightCircleIcon class="icon" v-if="to"></ArrowRightCircleIcon>
  </component>
</template>

<script>
import { ArrowRightCircleIcon } from 'vue-feather-icons'

export default {
  name: 'CTAButton',
  props: {
    to: { default: null, type: [String, Object] },
    disabled: { default: false, type: Boolean }
  },
  components: {
    ArrowRightCircleIcon
  }
}
</script>

<style lang="scss" scoped>
  .button {
    display: inline-block;
    position: relative;
    background-color: $sdg-c-deep-purple-50;
    border: 0px;
    border-radius: 999px;
    color: $sdg-c-heading-light;
    padding: 12px 16px;
    text-align: center;
    line-height: 1;
    cursor: pointer;

    .icon {
      width: 24px;
      vertical-align: top;
    }
  }

  // Router link styled as button
  a.button {
    text-decoration: none;
    padding-right: 48px;

    .icon {
      @include pos-center('y');
      right: 8px;
    }
  }

  // State modifiers
  .is-disabled {
    background: $sdg-c-gray-10;
    border: 1px solid $sdg-c-divider-dark-1;
    color: rgba(#000, 0.4);
    cursor: default;

    .icon {
      color: #000;
      opacity: 0.25;
    }
  }
</style>