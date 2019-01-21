<template>
  <div>
    <router-link to='/'><!--INSERT LOGO SRC <img src="" alt="SDG Logo">--></router-link>
    <nav>
      <router-link to='/dashboard'>Dashboard</router-link> | 
      <router-link to='/'>Info</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>