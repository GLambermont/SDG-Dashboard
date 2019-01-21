<template>
  <div class="home">
    <div class="content-width-s">
      <text-input type="text" required>
        <template slot="label">Gebruikersnaam</template>
      </text-input>

      <text-input type="email" required>
        <template slot="label">Email</template>
        <template slot="error-caption">Dit is een error caption.</template>
      </text-input>

      <text-input type="password" required>
        <template slot="label">Wachtwoord</template>
        <template slot="caption">Zorg er voor dat je wachtwoord minimaal 8 karakters lang is en gebruik minimaal 1 kleine letter, 1 hoofdletter en een nummer. </template>
      </text-input>

      <text-input type="password" required>
        <template slot="label">Herhaal wachtwoord</template>
      </text-input>


      <text-input type="search"></text-input>
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
