<template>
  <div class="home">
    <TextInput label="Mahmoud is dik" fill></TextInput>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'home',
  components: {
    TextInput
  }
}
</script>
