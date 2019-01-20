<template>
  <div class="dashboard">
    <div class="page-section">
      <div class="content-width">
        <div class="h1">
          Node- en sensorselectie
        </div> <br />
        <div class="h2">
          Selecteer een sensor om te starten.
        </div> <br />
        <div class="h3">
          Nodes
        </div>
        <node-list-component />
      </div>
    </div>
    <div class="page-section">
      <div class="content-width">
        <div class="h3">
          Sensors
        </div>
        <sensor-list-component />
      </div>
    </div>
  </div>
</template>

<script>
import NodeListComponent from '@/components/NodeList.vue'
import SensorListComponent from '@/components/SensorList.vue'

export default {
  name: 'Dashboard',
  components: {
    NodeListComponent,
    SensorListComponent
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
