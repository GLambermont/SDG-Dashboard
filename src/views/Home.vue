<template>
  <div class="home">
    <TextInput/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Home',
  components: {
    TextInput
  }
}
</script>
