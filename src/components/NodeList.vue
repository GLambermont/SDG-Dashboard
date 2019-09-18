<template>
  <div class="item-list">
    <ul v-for="item in list" :key="item">
      <ListItem @click.native="update(item)" :name="item"></ListItem>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ListItem from "@/components/ListItem";

export default {
  name: "NodeListComponent",
  components: {
    ListItem
  },
  data: () => {
    return {
      list: []
    };
  },
  methods: {
    update: function(item) {
      router.push({
        name: "/dashboard/sensor-info",
        query: {
          node: this.node,
          sensor: item
        }
      });
    }
  },
  mounted() {
    axios
      .get(this.$hostname + "/v0/sensors")
      .then(resp => {
        this.list = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
