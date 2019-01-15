<template>
  <div class="home">
    <TextInput
      label="Mahmoud is dik"
      fill
    />
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
