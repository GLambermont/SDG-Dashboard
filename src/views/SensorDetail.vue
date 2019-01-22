<template>
  <div class="detail-view">
    <div class="content-width-l">
    <div class="title-group bottom-spacing">
      <h1>Sensor{{ sensor }}</h1>
      <h2>Node: {{ node }}</h2>
    </div>
    <h3>Algemene Informatie</h3>
    <div class="general-info">
      <InfoCard class="card" title="ID" :value="sensor" />
      <InfoCard class="card" title="Actief" value="Ja" />
      <InfoCard class="card" title="Sensor tijd" :value="last.sensor_time" />
      <InfoCard class="card" title="Laatste waarde" :value="last.sensor_data" />
    </div>
    <div class="sensordata">
      <div class="raw">
        <h3>Sensor Data</h3>

      </div>
      <div class="table">
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
import InfoCard from "@/components/InfoCard";

export default {
  name: 'Detail',
  components: {
    InfoCard
  },
  data: () => {
    return {
      node: null,
      sensor: null,
      raw_data: [],
      last: {}
    }
  },
  methods: {
  },
  mounted () {
    this.node = this.$route.query.node
    this.sensor = this.$route.query.sensor
    axios.get(this.$hostname + '/v0/sensors/' + this.$route.query.node + '/' + this.$route.query.sensor).then(resp => {
      this.raw_data = resp.data
      new Chart(this.$el.querySelector('#myChart').getContext("2d"), {
        type: 'line',
        data: nodes.prepareData(this.raw_data, 250),
        options: {
          maintainAspectRatio: false,
          animation: {
            duration: 0, // general animation time
          },
          hover: {
            animationDuration: 0, // duration of animations when hovering an item
          },
          responsiveAnimationDuration: 0, // animation duration after a resize
        }
      })
      this.last = resp.data[resp.data.length - 1];
    })
  }
}
</script>

<style lang="scss">
.general-info {
  width: 100%;
  display: flex;
  margin: 0 -12px;

  .card {
    flex: 1;
    margin: 0 12px;
  }
}
</style>
