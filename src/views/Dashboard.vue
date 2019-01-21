<template>
  <div class="dashboard">
    <div class="content-width-l">
      <div class="title-group">
        <h1>Node- en sensor selectie</h1>
        <h2>Selecteer een sensor om te starten</h2>
      </div>

      <div class="list-section">
        <NodeList />
      </div>
      
      <div class="list-section">
        <SensorList />
      </div>
    </div>
  </div>
</template>

<script>
import NodeList from '@/components/NodeList.vue'
import SensorList from '@/components/SensorList.vue'

export default {
  name: 'Dashboard',
  components: {
    NodeList,
    SensorList
  }
}
</script>

<style lang="scss">
.dashboard {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .page-section {
    align-content: center;
    flex: 1;
  }
}

</style>
