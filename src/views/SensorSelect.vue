<template>
  <div class="sensor-select-view">
    <div class="content-width-l content-section">
      <div class="title-group bottom-spacing">
        <h1>Node- en sensor selectie</h1>
        <h2>Selecteer een sensor om te starten</h2>
      </div>

      <main class="page-section-container">
        <div class="page-section">
          <header class="list-header">
            <h3>Nodes</h3>
            <TextInput class="search-bar" type="search" placeholder="Zoeken" fill="#fff" />
          </header>

          <ul class="list nodes">
            <ListItem
              class="list-item"
              v-for="(node, index) in nodeList"
              :key="node"
              :isActive="activeNodeIndex === index"
              :name="node"
              @click.native="selectNode(node, index)"
            >
              <StarIcon class="action-icon" />
              <Trash2Icon class="action-icon destructive" />
            </ListItem>
          </ul>
        </div>

        <div class="page-section">
          <header class="list-header">
            <h3>Sensors</h3>
            <TextInput class="search-bar" type="search" placeholder="Zoeken" fill="#fff" />
          </header>

          <ul class="list sensors">
            <ListItem
              class="list-item"
              v-for="sensor in sensorList"
              scrollingInfo
              :key="sensor._id"
              :name="sensor.sensor_name"
              :info="{
                ID: sensor.sensor_id,
                time: sensor.sensor_time,
                data: sensor.sensor_data[0].data
              }"
              @click.native="$router.push({ name: 'sensorDetail', params: { node: nodeList[activeNodeIndex], sensor: sensor.sensor_id  } })"
            >
              <ArrowRightCircleIcon class="action-icon" />
            </ListItem>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getUniqueNodes } from "../library/nodes";
import TextInput from "@/components/TextInput";
import ListItem from "@/components/ListItem";
import { StarIcon, Trash2Icon, ArrowRightCircleIcon } from "vue-feather-icons";

export default {
  name: "SensorSelect",
  components: {
    TextInput,
    ListItem,
    StarIcon,
    Trash2Icon,
    ArrowRightCircleIcon
  },
  data: function() {
    return {
      nodeList: [],
      sensorList: [],
      activeNodeIndex: null
    };
  },
  methods: {
    // Get data from the SDG API
    getAPIData(url) {
      return axios.get(url).then(resp => resp.data);
    },

    getUniqueSensorData(node, nodeData) {
      let data = [];
      nodeData.forEach(async element => {
        let obj = {};
        obj._id = element._id;
        obj.sensor_id = element.sensor_id;
        obj.sensor_name = element.sensor_name;
        let getSingularMeasurement = await this.getAPIData(
          `${this.$hostname}/v0/sensors/${node}/${element.sensor_id}/1`
        );
        obj.sensor_data = getSingularMeasurement.sensor_data;
        data.push(obj);
      });
      return data;
    },

    // Get an array containing all nodes
    async getNodeList() {
      try {
        this.nodeList = await this.getAPIData(`${this.$hostname}/v0/sensors`);
      } catch (err) {
        console.error(err);
      }
    },

    // Get an array containing all sensors connected to a node
    async getSensorList(node) {
      try {
        const nodeData = await this.getAPIData(
          `${this.$hostname}/v0/sensors/${node}`
        );
        this.sensorList = this.getUniqueSensorData(node, nodeData);
      } catch (err) {
        console.error(err);
      }
    },

    // Show the active state of node and show sensors for the node
    selectNode(node, index) {
      this.activeNodeIndex = index; // Save the index of the clicked node
      this.getSensorList(node);
    }
  },
  mounted() {
    this.getNodeList();
  }
};
</script>

<style lang="scss">
.sensor-select {
  overflow: auto;
}

.page-section-container {
  display: flex;
  margin: 0 -20px;
}

.page-section {
  width: 50%;
  margin: 0 20px;
}

// Headers for node and sensor lists
.list-header {
  margin-bottom: -40px;
  padding: 24px;
  padding-bottom: 48px;
  background: $sdg-c-gray-10;
  border-radius: 8px;

  h3 {
    margin-top: 0;
  }

  .search-bar {
    display: block;
    width: 100%;
  }
}

.list {
  margin: 0;
  padding: 0 24px;
  padding-top: 2px;
  max-height: 40vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.list-item {
  margin-bottom: 16px;
}

// List item action icons
.action-icon {
  margin-left: 16px;

  &.destructive {
    color: $sdg-c-error-red;
  }
}
</style>
