<template>
  <div class="item-list">
    <ul v-for="item in list" :key="item">
      <li @click="click(item)">Sensor{{ item }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
const nodes = require("../library/nodes");
import router from "../router";

export default {
  name: "SensorListComponent",
  props: {},
  data: () => {
    return {
      list: [],
      node: null
    };
  },
  methods: {
    click: function(item) {
      router.push({
        name: "Detail",
        query: {
          node: this.node,
          sensor: item
        }
      });
    }
  },
  mounted() {
    this.$dsGetObservable("node").subscribe(node => {
      axios
        .get(this.$hostname + "/v0/sensors/" + node)
        .then(resp => {
          this.list = nodes.getUniqueNodes(resp.data);
          this.node = node;
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};
</script>

<style lang="scss" scoped>
.right {
  align-content: right;
}
</style>
