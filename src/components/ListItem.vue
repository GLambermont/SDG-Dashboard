<template>
<li 
  class="floating-list-item" 
  :class="{ 'is-active': isActive }"
>
  <div class="info">
    <span class="info-part name">{{ name }}</span>
    <span class="info-part" v-for="(value, key) in info" :key="key">
      {{ key }}: {{ value }} 
    </span>
  </div>

  <div class="content">
    <slot></slot>
  </div>
</li>
</template>

<script>
export default {
  name: 'FloatingListItem',
  props: {
    isActive: { default: false, type: Boolean },
    name: { default: '', type: String },
    info: { default() { return {}; }, type: Object }
  }
};
</script>

<style lang="scss" scoped>
$active-shadow: 0 0 0 2px $sdg-c-deep-purple-50;

.floating-list-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: $sdg-c-white;
  box-shadow: $sdg-shadow-1;
  border-radius: 4px;
  list-style: none;
  transition: box-shadow 0.25s ease;  
  cursor: pointer;

  &.is-active {
    box-shadow: $sdg-shadow-1, $active-shadow;
  }

  @include media('>tablet') {
    &:hover {
      box-shadow: $sdg-shadow-2;
    }

    &.is-active:hover {
      box-shadow: $sdg-shadow-2, $active-shadow;
    }
  }
}

// Item information
.info-part {
  position: relative;
  padding: 0 16px;

  &:first-child { 
    padding-left: 0;
  }

  // Divider
  &:not(:last-child)::after {
    @include pos-center('y');
    content: '';
    right: 0;
    height: 16px;
    border-left: 1px solid $sdg-c-divider-dark-1;
  }

  &.name {
    font-weight: 600;
    color: $sdg-c-heading-dark;
  }
}

// Content from slot
.content {
  margin-left: auto;
}
</style>
