<template>
  <fieldset class="text-input" :class="baseClasses" :data-type="type">
    <label :for="`${id}-input`" v-if="$slots.label">
      <slot class="label-text" name="label" />
      <span class="tag" v-if="tag != null">{{ tagText }}</span>
    </label>

    <!-- Single line input -->
    <div class="input-container">
      <SearchIcon class="icon" v-if="type === 'search'" />

      <component 
        :is="type === 'textarea' ? 'textarea' : 'input'" 
        :type="type === 'textarea' ? null : convertedInputType"
        :required="type === 'textarea' ? null : required"
        :pattern="type === 'textarea' ? null : pattern"
        :style="inputStyles"
        :disabled="disabled"
        :cols="type === 'textarea' ? cols : null" 
        :rows="type === 'textarea' ? rows : null"
        :placeholder="placeholder"
        @focus="isActive = true"
        @blur="isActive = false"
        @change="type === 'textarea' ? null : validate"
        v-model="value"
      ></component>
    </div>

    <p class="caption" v-if="$slots.caption"><slot name="caption"/></p>
    <p class="caption" v-if="$slots['error-caption'] && isInvalid"><slot name="error-caption"/></p>
  </fieldset>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: 'TextInput',
  components: {
    SearchIcon
  },
  data() {
    return {
      id: null,
      isActive: false,
      isValid: false,
      isInvalid: false,
      supportedTypes: ['date', 'datetime-local', 'email', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week', 'textarea'],
      value: ''
    }
  },
  mounted() {
    this.id = this._uid;
  },
  props: {
    disabled: { default: false, type: Boolean },
    placeholder: { default: null, type: String },
    'read-only': { default: false, type: Boolean },
    required: { default: false, type: Boolean },
    pattern: { default: null, type: String },
    tag: { default: null, type: String },
    fill: { default: null, type: String },
    type: { default: 'text', type: String },
    cols: { default: 30, type: Number },
    rows: { default: 10, type: Number }
  },
  computed: {
    // Set text of tag element
    tagText() {
      if (this.tag != null && this.tag != '') {
        return this.tag;
      } else if (this.tag != null && this.required) {
        return '(required)';
      } else if (this.tag != null && !this.required) {
        return '(optional)';
      }
    },

    // Classes for the fieldset element
    baseClasses() {
      return {
        'is-disabled': this.disabled,
        'is-active': this.isActive,
        'is-valid': this.required && this.isValid,
        'is-invalid': this.required && this.isInvalid,
      }
    },

    // Conditional styling for the input and textarea elements
    inputStyles() {
      return { backgroundColor: this.fill != null && (this.fill || '#F2F2F2') }
    },

    // Convert type to a text type
    convertedInputType() {
      if(this.supportedTypes.includes(this.type)) {
        return this.type;
      } else {
        // Show a warning and use the text type when an invalid type is given
        console.warn(`${this.type} is not a valid type for the TextInput component. The default text type will be used.`);
        return 'text';
      }
    }
  },
  methods: {
    // Validate the input based on native HTML validation
    validate() {
      const inputEl = this.$el.querySelector('input');

      this.isValid = inputEl.validity.valid;
      this.isInvalid = !inputEl.validity.valid;
    }
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
    margin-left: 8px;
    color: rgba(#000, 0.4);
  }
}

.input-container {
  position: relative;
  width: 100%;
  border: 1px solid $sdg-c-divider-dark-2;
  border-radius: 4px;
  transition: box-shadow 0.125s ease;
}

input, textarea {
  display: block;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: inherit;
  background: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(#000, 0.4);
  }

  [data-type="search"] & {
    padding-left: 48px;
  }
}

.caption {
  margin: 12px 0 0 0;
}

.icon {
  @include pos-center('y');
  left: 12px;
  width: 24px;
  height: 24px;
}

// State modifiers
.is-disabled {
  pointer-events: none;
  cursor: default;

  label,
  .caption {
    color: rgba(#000, 0.4);
  }

  .input-container {
    border-color: rgba(#000, 0.18);
  }
}

.is-active {
  label {
    color: $sdg-c-deep-purple-50;
  }

  .input-container {
    box-shadow: 0 0 0 2px $sdg-c-deep-purple-50;
  }

  .icon {
    stroke: $sdg-c-deep-purple-50;
  }
}

.is-valid {
  label,
  .caption {
    color: $sdg-c-success-green;
  }

  .input-container {
    box-shadow: 0 0 0 2px $sdg-c-success-green;
  }
}

.is-invalid {
  label,
  .caption {
    color: $sdg-c-error-red;
  }

  .input-container {
    box-shadow: 0 0 0 2px $sdg-c-error-red;
  }
}
</style>


