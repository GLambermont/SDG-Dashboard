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

          <NodeList class="list"/>
        </div>
        
        <div class="page-section">
          <header class="list-header">
            <h3>Sensors</h3>
            <TextInput class="search-bar" type="search" placeholder="Zoeken" fill="#fff" />
          </header>

          <SensorList class="list"/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';
import NodeList from '@/components/NodeList.vue';
import SensorList from '@/components/SensorList.vue';

export default {
  name: 'SensorSelect',
  components: {
    TextInput,
    NodeList,
    SensorList
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

  .search-bar {
    display: block;
    width: 100%;
  }
}

.list {
  margin: 0 24px;
}
</style>
