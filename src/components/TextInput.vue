<template> <!--body-->
  <div class="text-input">
    <label for="input">{{ label }}</label>
      <div class="input-container">
        <input id="input" type="text" :style="styles">
        <div class="border"></div>
      </div>
    <p v-if="description">{{ description }}</p>
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
    };
  },
  computed: {
    styles: function() {
      return { backgroundColor: (this.fill === '') ? this.defaultFill : this.fill } 
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
    border: 1px solid;
  }
</style>
