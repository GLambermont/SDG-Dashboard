<template>
<div class="info-card">
  <h6>{{ title }}</h6>
  <p>{{ value }}</p>
</div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: { default: null, type: String },
    value: { value: null, type: [String, Number] }
  }
};
</script>

<style lang="scss" scoped>
.info-card {
  display: inline-block;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid $sdg-c-divider-dark-1;
  overflow: hidden;
}

h6,
p {
  margin: 0;
}

p {
  margin-top: 8px;
}
</style>
