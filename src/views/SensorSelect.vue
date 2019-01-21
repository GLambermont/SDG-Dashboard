<template>
  <div class="sensor-select">
    <div class="content-width-s">
      <ListItem name="grasso_node0" :info="{ locatie: 'IoT Stadslab' }" />
    </div>
  </div>
</template>

<script>
import NodeList from '@/components/NodeList.vue'
import SensorList from '@/components/SensorList.vue'
import ListItem from '@/components/ListItem.vue'

export default {
  name: 'SensorSelect',
  components: {
    NodeList,
    SensorList,
    ListItem
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
