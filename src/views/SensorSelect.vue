<template>
  <div class="sensor-select">
    <div class="content-width-l">
      <div class="title-group">
        <h1>Node- en sensor selectie</h1>
        <h2>Selecteer een sensor om te starten</h2>
      </div>
      
      <main class="page-section-container">
        <div class="page-section">
          <header class="list-header">
            <h3>Nodes</h3>
            <TextInput type="search" placeholder="Zoeken" fill="#fff" />
          </header>
          <NodeList />
        </div>
        
        <div class="page-section">
          <SensorList />
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
}

.page-section {
  width: 50%;
  border: 1px solid pink;
}
</style>
