<template>
  <div class="home">
    <node-list-component></node-list-component>
    <sensor-list-component></sensor-list-component>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from '@/components/TextInput.vue'
import NodeListComponent from '@/components/NodeList.vue'
import SensorListComponent from '@/components/SensorList.vue'

export default {
  name: 'Home',
  components: {
    TextInput,
    NodeListComponent,
    SensorListComponent
  }
}
</script>
