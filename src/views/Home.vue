<template>
  <div>
    <main>
      <div class="content-section">
        <div class="content-width-s">
          <div class="title-group bottom-spacing">
            <h1>SDG Dashboard</h1>
            <h2>Immediate insight in your data</h2>
          </div>
          <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.</p>
          <CTAButton>Starten</CTAButton>
        </div>
      </div>
      <div class="content-section bottom text-light">
        <div class="content-width-s">
          <h3>Hoe start ik met het SDG?</h3>
          <p>As I went on, still gaining velocity, the palpitation of night and day merged into one continuous greyness; the sky took on a wonderful deepness of blue, a splendid luminous color like that of early twilight; the jerking sun became a streak of fire, a brilliant arch, in space; the moon a fainter fluctuating band; and I could see nothing of the stars, save now and then a brighter circle flickering in the blue.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from '@/components/TextInput.vue'
import router from '../router'
import 'normalize.css'
import CTAButton from '@/components/CTAButton.vue';

export default {
  name: 'Home',
  components: {
    TextInput,
    CTAButton
  }
};
</script>

<style lang="scss" scoped>
  .content-section {
    padding: 120px 0px;

    &.bottom {
      background-color: $sdg-c-deep-purple-50;
    }
  }
</style>
