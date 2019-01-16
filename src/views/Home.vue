<template>
  <div class="home">
    <TextInput
      label="Mahmoud is dik"
      fill
    />
  <div>
    <PageHeader></PageHeader> 
    <main> 
      <div class="page-section">
        <div class="content-width">
          <h1>SDG Dashboard</h1>
          <h2>Immediate insight in your data</h2>        
          <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.</p>
          <button type="button">Starten</button>
        </div>
      </div>
      <div class="page-section">
        <div class="content-width">
          <h1>Hoe start ik met het SDG?</h1>       
          <p>As I went on, still gaining velocity, the palpitation of night and day merged into one continuous greyness; the sky took on a wonderful deepness of blue, a splendid luminous color like that of early twilight; the jerking sun became a streak of fire, a brilliant arch, in space; the moon a fainter fluctuating band; and I could see nothing of the stars, save now and then a brighter circle flickering in the blue.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from '@/components/TextInput.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    TextInput,
    NodeListComponent,
    SensorListComponent
  }
}
</script>

<style lang="scss">
  .page-section {

  }
</style>