<template>
  <div class="sensor-select">
    <div class="content-width-l">
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

          <ul class="list nodes" v-for="node in nodeList" :key="node">
            <ListItem class="list-item" @click.native="() => getSensorList(node)" :name="node"></ListItem>
          </ul>
        </div>
        
        <div class="page-section">
          <header class="list-header">
            <h3>Sensors</h3>
            <TextInput class="search-bar" type="search" placeholder="Zoeken" fill="#fff" />
          </header>

          <ul class="list sensors" v-for="sensor in sensorList" :key="sensor._id">
            <ListItem class="list-item" 
              :name="sensor.sensor_name" 
              :info="{ 
                ID: sensor.sensor_id,
                time: sensor.sensor_time,
                data: sensor.sensor_data
              }">
            </ListItem>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TextInput from '@/components/TextInput';
import ListItem from "@/components/ListItem";

export default {
  name: 'SensorSelect',
  components: {
    TextInput,
    ListItem
  },
  data: function() {
    return {
      nodeList: [],
      sensorList: []
    }
  },
  methods: {
    // Get data from the SDG API
    getAPIData(url) {            
      return axios.get(url).then(resp => resp.data); 
    },


    getUniqueSensorData(nodeData, count) {
      let data = [];

      for(let i = 0; i < count; i++) {                
        if (!data.includes(nodeData[i])) {
          data.push(nodeData[i]);
        }
      }

      return data;
    },

    // Get an array containing all nodes
    async getNodeList() {
      try {
        this.nodeList = await this.getAPIData(`${this.$hostname}/v0/sensors`);
      } catch(err) {
        console.error(err);
      }
    },

    // Get an array containing all sensors connected to a node
    async getSensorList(node) {     
      try {
        const nodeData = await this.getAPIData(`${this.$hostname}/v0/sensors/${node}`);
        this.sensorList = this.getUniqueSensorData(nodeData, 12);        
      } catch(err) {
        console.error(err);
      }
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
  padding-bottom: 80px;
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
  padding: 0;
  margin: 0 24px;
}

.list-item {
  margin-bottom: 16px;
}
</style>
