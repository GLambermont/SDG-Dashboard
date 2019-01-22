<template>
  <div class="detail-view">
    <div class="content-width-l">
    <div class="title-group bottom-spacing">
      <h1>Sensor{{ sensor }}</h1>
      <h2>Node: {{ node }}</h2>
    </div>
    <h3>Algemene Informatie</h3>
    <div class="generalinfo">
      <div class="box">
        <span class="title">ID</span> 
        <span class="value">{{ sensor }}</span>        
      </div>
      <div class="box">
        <span class="title">Actief</span> 
        <span class="value">Ja</span>        
      </div>
      <div class="box">
        <span class="title">Sensor Tijd</span> 
        <span class="value"></span>
      </div>
      <div class="box">
        <span class="title">Laatste Waarden</span> 
        <span class="value"></span>
      </div>
    </div>
    <div class="sensordata">
      <div class="raw">
        <h3>Sensor Data</h3>

      </div>
      <div class="table" style="position: relative; height:40vh; width:80vw">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
const chart = require('chart.js')
const nodes = require('../library/nodes')

export default {
  name: 'Detail',
  components: {
  },
  data: () => {
    return {
      node: null,
      sensor: null,
      raw_data: [],
    }
  },
  methods: {
    getLastItem : function () {
      return this.raw_data
    }
  },
  mounted () {
    this.node = this.$route.query.node
    this.sensor = this.$route.query.sensor
    axios.get(this.$hostname + '/v0/sensors/' + this.$route.query.node + '/' + this.$route.query.sensor).then(resp => {
      this.raw_data = resp.data
      new Chart(this.$el.querySelector('#myChart').getContext("2d"), {
        type: 'line',
        data: nodes.prepareData(this.raw_data)
      })
    })
  }
}
</script>

<style lang="scss">

</style>
