<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CTAButton',
  mounted () {
    this.$el.addEventListener('click', () => {
      
    });
  }
  
}
</script>


<style lang="scss" scoped>
  button {
    background-color: $sdg-c-deep-purple-50;
    border: 0px;
    border-radius: 9999999px;
    color: $sdg-c-heading-light;
    height: 40px;
    padding: 0px 16px;
    text-align: center;
  }
</style>