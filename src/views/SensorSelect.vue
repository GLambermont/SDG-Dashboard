<template>
  <div class="sensor-select">
    <NodeListItemList />
  </div>
</template>

<script>
import NodeList from '@/components/NodeList.vue'
import SensorList from '@/components/SensorList.vue'
import NodeListItemList from '@/components/NodeListItemList.vue'

export default {
  name: 'SensorSelect',
  components: {
    NodeList,
    SensorList,
    NodeListItemList
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
