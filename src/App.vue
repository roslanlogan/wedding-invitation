<template>
  <v-app>
    <!-- <v-overlay :absolute="true" v-model="overlay" @click.once="closeOverlay()">
      <img class="background-image invitation-gif" src="../src/assets/invitation.gif" />
    </v-overlay> -->
    <v-main class="paddingless">
      <AudioPlayer :autoplay="true" :sources="audioSources" :loop="true" v-show="false" />
      <Home2 />
    </v-main>
  </v-app>
</template>

<script>
import sound from '../src/assets/songs/sukidakara.mp3'
import Home2 from './components/Home2.vue'
import AudioPlayer from "./components/AudioPlayer.vue";

export default {
  name: 'App',

  components: {
    Home2,
    AudioPlayer,
  },

  data: () => ({
    overlay: true,
    audioSources: [
      sound,
    ]
  }),
  methods: {
  }
}
</script>

<style lang="scss">
.paddingless {
  padding: 0 !important;
}

.invitation-gif {
  width: 100% !important;
  height: 100% !important;
}

.v-overlay__content {
  width: 100%;
  top: 10vh !important;
  // left : 10vw !important;
}
</style>
