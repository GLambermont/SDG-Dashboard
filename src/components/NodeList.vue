<template>
  <div class="item-list">
      <h1>Nodes</h1>
      <ul v-for="item in list" :key="item">
          <li @click="update(item)">{{ item }} | <span class="right" data-feather="star"></span> <span class="right" data-feather="trash-2"></span></li>
      </ul>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'NodeListComponent',
  props: {},
  data: () => {
    return {
      list: []
    }
  },
  methods: {
    update: function (item) {
      this.$dsPushUpdate('node', item)
    }
  },
  mounted () {
    axios.get(this.$hostname + '/v0/sensors')
      .then(resp => {
        this.list = resp.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.right {
  align-content: right;
}
</style>
