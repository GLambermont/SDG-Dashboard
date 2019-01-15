<template>
  <fieldset class="text-input">
    <label for="input"><slot></slot></label>
    <div class="input-container">
      <input type="text" id="input">
      <div class="input-border"></div>
    </div>
    <p><slot name="description"></slot></p>
  </fieldset>
</template>

<script>
export default {
  name: 'TextInput',
  fill: { type: String, default: '' }
};
</script>

<style lang="scss" scoped>
  .text-input {
    border: none;
    padding: 0;
  }

  input {
    padding: 12px 16px;
    border: 1px solid rgba(#000, 0.4);
    border-radius: 4px;
    background: $sdg-c-gray-10;
    
    &::placeholder {
      color: rgba(#000, 0.4);
    }

    &:focus {
      outline: 2px solid  #4E44D6;
    }
  }

  .is-valid {}

  .has-warning {}

  .has-error {}
</style>
