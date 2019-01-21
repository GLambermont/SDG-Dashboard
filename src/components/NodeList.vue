<template>
  <div class="item-list">
    <ul v-for="item in list" :key="item">
      <ListItem @click.native="update(item)" :name="item"></ListItem>

        <!-- <li @click="update(item)">{{ item }} | <span class="right" data-feather="star"></span> <span class="right" data-feather="trash-2"></span></li> -->
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ListItem from "@/components/ListItem";

export default {
  name: 'NodeListComponent',
  components: {
    ListItem
  },
  data: () => {
    return {
      list: []
    }
  },
  methods: {
    update: function (item) {
      this.$dsPushUpdate('node', item)
    }
  },
  mounted () {
    axios.get(this.$hostname + '/v0/sensors')
      .then(resp => {
        this.list = resp.data
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>
