<template>
  <div class="page-header">
    <router-link to='/' class="logo"><img src="../images/logos/logo_sdg-dashboard.svg" alt="Smart Data Grid"></router-link>

    <nav class="main-nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/sensor-select'>Dashboard</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  background: $sdg-c-white;
  border-bottom: 1px solid $sdg-c-divider-dark-1;
}

.logo {
  display: inline-block;
  line-height: 1;

  img {
    height: 32px;
  }
}

.main-nav {
  display: inline-block;
  margin-left: auto;

  // Rendered router link
  a {
    display: inline-block;
    position: relative;
    padding: 0 16px;
    color: $sdg-c-copy-dark;
    text-decoration: none;

    // Link divider
    &:not(:first-child)::after {
      content: '';
      @include pos-center('y');
      left: 0;
      height: 16px;
      border-left: 1px solid $sdg-c-divider-dark-1;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  .router-link-exact-active {
    color: $sdg-c-deep-purple-50;
    font-weight: 600;
  }
}
</style>
