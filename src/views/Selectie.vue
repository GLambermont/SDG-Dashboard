<template>
  <div class="home">
    <node-list-component></node-list-component>
    <sensor-list-component></sensor-list-component>
  </div>
</template>

<script>
import NodeListComponent from '@/components/NodeList.vue'
import SensorListComponent from '@/components/SensorList.vue'

export default {
  name: 'Selectie',
  components: {
    NodeListComponent,
    SensorListComponent
  }
}
</script>
