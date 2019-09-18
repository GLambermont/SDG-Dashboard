<template>
  <div class="detail-view">
    <div class="content-width-l content-section">
      <div class="title-group bottom-spacing">
        <h1>Sensor: {{ sensor }}</h1>
        <h2>Node: {{ node }}</h2>
      </div>
      <h3>Algemene Informatie</h3>
      <div class="general-info">
        <InfoCard class="card" title="ID" :value="sensor" />
        <InfoCard class="card" title="Actief" value="Ja" />
        <InfoCard class="card" title="Sensor tijd" :datetime="last.time" />
        <InfoCard class="card" title="Laatste waarde" :value="last.data" />
      </div>
      <div class="sensordata">
        <div class="raw">
          <h3>Sensor Data</h3>
        </div>
        <div class="table">
          <canvas id="myChart"></canvas>
          <div class="right">
            <CTAButton :to="{ name: 'sensorDataRaw', params: { node, sensor } }">Bekijk ruwe data</CTAButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import chart from "chart.js";
import { prepareData } from "../library/nodes";
import CTAButton from "@/components/CTAButton.vue";
import InfoCard from "@/components/InfoCard";
import NProgress from "nprogress";

export default {
  name: "Detail",
  components: {
    InfoCard,
    CTAButton
  },
  data: () => {
    return {
      node: null,
      sensor: null,
      raw_data: [],
      last: {}
    };
  },
  methods: {},
  mounted() {
    // Als opgeslagen Node & Sensor bestaan in LocalStorage en niet undefined zijn.
    if (
      (this.$ls.get("_selectedNode", "nil") != "nil" ||
        this.$ls.get("_selectedSensor", "nil") != "nil") &&
      (this.$ls.get("_selectedNode") != "undefined" &&
        this.$ls.get("_selectedSensor") != "undefined")
    ) {
      // Check of route een nieuwe node aan ons aanbiedt (Mag niet undefined zijn, en MOET anders zijn dan opgeslagen variant)
      if (
        this.$route.params.node != undefined &&
        this.$route.params.node != this.$ls.get("_selectedNode")
      ) {
        this.node = this.$route.params.node;
        this.$ls.set("_selectedNode", this.node);
        this.sensor = this.$route.params.sensor;
        this.$ls.set("_selectedSensor", this.sensor);
      } else {
        // Zonee, vul oude, opgeslagen info in.
        this.node = this.$ls.get("_selectedNode");
        this.sensor = this.$ls.get("_selectedSensor");
      }
    } else {
      if (this.$route.params.node == undefined) {
        router.push("dashboard");
      } else {
        this.node = this.$route.params.node;
        this.$ls.set("_selectedNode", this.node);
        this.sensor = this.$route.params.sensor;
        this.$ls.set("_selectedSensor", this.sensor);
      }
    }

    axios
      .get(`${this.$hostname}/v0/sensors/${this.node}/${this.sensor}/50`)
      .then(resp => {
        this.raw_data = resp.data.sensor_data;

        new Chart(this.$el.querySelector("#myChart").getContext("2d"), {
          type: "line",
          data: prepareData(this.raw_data, 250),
          options: {
            maintainAspectRatio: false
          }
        });
        this.last = this.raw_data[this.raw_data.length - 1];
      });
  }
};
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

  .sensordata > .table {
    width: 400px;
    height: 1600px;
  }
}
</style>