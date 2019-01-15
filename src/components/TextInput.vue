<template>
  <fieldset class="text-input">
    <label for="input"><slot name="label"></slot></label>
    
    <div class="input-container">
      <input type="text" id="input">
      <div class="state-border"></div>
    </div>

    <p><slot name="description"></slot></p>
  </fieldset>
</template>



<script>
export default {
  name: 'TextInput',
  fill: { type: String, default: '' },
  type: { type: Boolean, default: false }
};
</script>

<style lang="scss" scoped>
  .text-input {
    border: none;
    padding: 0;
  }

  label {
    display: block;
  }

  .input-container {
    display: inline-block;
    position: relative;
  }

  input {
    padding: 12px 16px;
    border: 1px solid $sdg-c-divider-dark-2;
    border-radius: 4px;
    background: $sdg-c-gray-10;
    
    &::placeholder {
      color: rgba(#000, 0.4);
    }

    .state-border {
      @include overlay(-1px, -1px, -1px, -1px);
      border-radius: inherit;
      border-width: 2px;
      border-style: solid;
      border-color: $sdg-c-deep-purple-50;
    }
  }

  .is-valid {}

  .has-warning {}

  .has-error {}
</style>
