<template>
  <div class="home">
    <div class="content-width-s">
      <text-input type="single-line" tag>
        <template slot="label">Input label</template>
        <template slot="caption">Input description</template>
      </text-input>
    </div>
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
