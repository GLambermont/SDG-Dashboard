<template>
  <div class="text-input">
    <label for="input">
      {{ label }}
    </label>
    <div class="input-container">
      <input
        id="input"
        type="text"
        :style="baseStyles"
      >
      <div class="border" />
    </div>
    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: String,
    description: String,
    fill: String,
    inputError: String,
    inputWarning: String,
    inputAccepted: String
  },
  data: function () {
    return {
      defaultFill: '#F2F2F2'
    }
  },
  computed: {
    baseStyles: function () {
      return { backgroundColor: (this.fill === '') ? this.defaultFill : this.fill }
    },

    validation: function () {
      return { }
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    border: 1px solid rgba( #000000, 40%);
    border-radius: 4px;
    padding: 12px 16px;

    &::placeholder {
      color: rgba( #000000, 40%);
    }

    &:focus {
      outline: 2px solid  #4E44D6;
    }
  }

  .input-container {
    //if input error
    border: 2px solid rgba(#F23535, 100%);

    //if input warning
    border: 2px solid rgba(#E1A20E, 100%);

    //if input accepted
    border: 2px solid rgba(#0BB35C, 100%);
  }

  .is-valid {

  }

  .has-warning {

  }

  .has-error {

  }
</style>
