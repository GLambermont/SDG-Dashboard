<template>
  <fieldset class="text-input" :class="{ 'is-active': isActive }">
    <label for="input" v-if="$slots.label">
      <slot name="label"/>
      <span class="tag" v-if="tag != null">&nbsp;{{ tagText }}</span>
    </label>

    <input 
      id="input" 
      type="text" 
      :style="{ backgroundColor: fill != null && (fill || '#F2F2F2') }"
      @focus="isActive = true;"
      @blur="isActive = false"
    >

    <p class="caption" v-if="$slots.caption"><slot name="caption"/></p>
  </fieldset>
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      isActive: false
    }
  },
  props: {
    required: { default: false, type: Boolean },
    tag: { default: null, type: String },
    fill: { default: null, type: String },
    type: { default: 'single-line', type: String }
  },
  computed: {
    tagText() {
      if (this.tag != null && this.tag != '') {
        return this.tag;
      } else if (this.tag != null && this.required) {
        return ' (required)';
      } else if (this.tag != null && !this.required) {
        return ' (optional)';
      } 
    },
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  border: none;
  margin: 16px 0;
  padding: 0;
  max-width: 400px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: $sdg-c-heading-dark;

  .tag {
    color: rgba(#000, 0.4);
  }
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid $sdg-c-divider-dark-2;
  border-radius: 4px;
  transition: box-shadow 0.125s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(#000, 0.4);
  }
}

.caption {
  margin: 12px 0 0 0;
}

// State modifiers
.is-active {
  label {
    color: $sdg-c-deep-purple-50;
  }

  input {
    box-shadow: 0 0 0 2px $sdg-c-deep-purple-50; 
  }
}

.is-valid {}

.has-warning {}

.has-error {}
</style>
