<template>
  <div class="home">
    <text-input type="single-line" validate>
      <template slot="label">Input label</template>
      <template slot="description">Input description</template>
    </text-input>
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
