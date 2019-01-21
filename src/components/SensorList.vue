<template>
  <div class="item-list">
      <ul v-for="item in list" :key="item._id">
          <li >Sensor{{ item.sensor_id }} - {{ item.sensor_data }} @ {{ item.sensor_time }}</li>
      </ul>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'SensorListComponent',
  props: {},
  data: () => {
    return {
      list: []
    }
  },
  mounted () {
    this.$dsGetObservable('node').subscribe(node => {
        axios.get(this.$hostname + '/v0/sensors/' + node)
        .then(resp => {
            this.list = resp.data
        })
        .catch(err => {
            console.log(err)
        })
    })
  }
}
</script>

<style lang="scss" scoped>
.right {
  align-content: right;
}
</style>
