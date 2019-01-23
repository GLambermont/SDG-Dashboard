<template>
<div class="sensor-data-view">
  <div class="content-width-s">
    <div class="title-group bottom-spacing">
      <h1>Sensor: {{ sensor }}</h1>
      <h2>Node: {{ node }}</h2>
    </div>

    <pre><code>{{ data }}</code></pre>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SensorDataRaw',
  data() {
    return {
      sensor: null,
      node: null,
      data: null
    }
  },
  mounted() {
    this.node = this.$route.params.node;
    this.sensor = this.$route.params.sensor;

    axios.get(this.$hostname + '/v0/sensors/' + this.$route.params.node + '/' + this.$route.params.sensor).then(resp => {
      this.data = resp.data
    });
  }
};
</script>