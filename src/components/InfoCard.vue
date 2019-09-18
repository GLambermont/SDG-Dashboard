<template>
  <div class="info-card" :style="{ backgroundColor: fill }">
    <h6>{{ title }}</h6>
    <p v-if="datetime == null">{{ value }}</p>
    <p v-else>{{ datetime | formatDate }}</p>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: { default: null, type: String },
    value: { default: null, type: [String, Number] },
    datetime: { default: null, type: String },
    fill: { default: null, type: String }
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
  background: $sdg-c-white;
}

h6,
p {
  margin: 0;
}

p {
  margin-top: 8px;
}
</style>
