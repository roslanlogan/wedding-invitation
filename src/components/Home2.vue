<template>
  <v-card class="mx-auto overflow-hidden" height="100vh" max-width="500">

    <v-sheet class="overflow-y-auto" max-height="100vh">

      <v-responsive height="100vh">

        <div class="d-flex flex-column mb-6">
          <header class="header">
            <img class="background-image top-renda" src="../assets/flower-small-bottom-half.png">
          </header>
          <div class="content">
            <div class="example">
              <img class="background-image imgflower" src="../assets/flower-big.svg">
              <div class="overlay-1">
                <div class="font-weight-light word-1">
                  السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                </div>
                <div class="font-weight-light word-1">
                  Dengan penuh rasa kesyukuran, kami sekeluarga ingin menjemput Tuan/Puan
                  ke majlis
                </div>
                <br />
                <div class="font-weight-light word-1">
                  WALIMATULURUS
                </div>

              </div>

              <div class="overlay-2">
                <div class="font-weight-light word-2 shimmer">
                  R &nbsp; A
                </div>
              </div>


              <div class="overlay-5">
                <div class="font-weight-light word-3">
                  ROSLAN & AINAA
                </div>
                <div class="font-weight-light word-4">
                  AHAD | 13.11.2022
                </div>
              </div>

              <div class="overlay-3 shimmer">
                <img class="background-image ring" src="../assets/ring2.png">
              </div>

              <div class="overlay-4 typewriter">
                <div class="font-weight-light word-5 ">
                  Balai Rakyat Batu Lanchang, <br />
                  Jelutong, Pulau Pinang
                  <br />
                  Jamuan : 6.00 PM - 11.00 PM
                  <br />
                  Ketibaan Pengantin : 7.00PM
                </div>
              </div>

            </div>
          </div>

          <footer class="footer">
            <v-bottom-navigation :value="activeBtn" hide-on-scroll horizontal scroll-threshold="500"
              scroll-target="#scroll-threshold-example">
              <v-btn @click="openCallerDrawer()">
                <v-icon>mdi-phone-dial</v-icon>
              </v-btn>

              <v-btn @click="openWhatsAppDrawer()">
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn>

              <v-btn @click="openMapsDrawer(2)">
                <v-icon>mdi-google-maps</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </footer>
        </div>
      </v-responsive>


    </v-sheet>

  </v-card>

  <div class="text-center">
    <vue-bottom-sheet ref="callSheet">
      <v-list flat>
        <v-list-item-group color="primary">
          <v-list-item v-for="tile in callTiles" :key="tile.title" @click="call(tile.link)">
            <v-list-item-content>
              <v-list-item-title v-text="tile.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </vue-bottom-sheet>
  </div>


  <div class="text-center">
    <vue-bottom-sheet ref="whatsAppSheet">
      <v-list flat>
        <v-list-item-group color="secondary">
          <v-list-item v-for="tile in whatsAppTile" :key="tile.title" @click="wasep(tile.link)">
            <v-list-item-content>
              <v-list-item-title v-text="tile.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </vue-bottom-sheet>
  </div>

</template>
<script>

import VueBottomSheet from "../components/VueBottomModal.vue";
export default {
  name: 'HomeComponent',
  components: {
    VueBottomSheet,
  },
  mounted() {
    let self = this
    setInterval(function () {
      self.cssFadeout1 = !self.cssFadeout1
      self.cssFadeout2 = !self.cssFadeout2
    }, 5000);

  },
  data: () => ({
    cssFadeout1: false,
    cssFadeout2: true,
    activeBtn: 1,
    callTiles: [
      { icon: 'mdi-phone', title: 'Mat(Bapa)', link: "tel:60164581581" },
      { icon: 'mdi-phone', title: 'Ina(Mak)', link: "tel:60164581580" },
      { icon: 'mdi-phone', title: 'Sulaiman', link: "tel:60124234406" },
      { icon: 'mdi-phone', title: 'Rozita', link: "tel:601116335424" },
      { icon: 'mdi-phone', title: 'Amin', link: "tel:60174455368" },
    ],
    whatsAppTile: [
      { icon: 'mdi-whatsapp', title: 'Mat(Bapa)', link: "https://wa.me/60164581581" },
      { icon: 'mdi-whatsapp', title: 'Sulaiman', link: "https://wa.me/60124234406" },
      { icon: 'mdi-whatsapp', title: 'Rozita', link: "https://wa.me/601116335424" },
      { icon: 'mdi-whatsapp', title: 'Amin', link: "https://wa.me/60174455368" },
    ]
  }),
  methods: {
    openMapsDrawer() {
      window.open("https://goo.gl/maps/pAcGkXyCL1AUTV5a7", '_blank')
    },
    openCallerDrawer() {
      this.$refs.callSheet.open();
    },
    openWhatsAppDrawer() {
      this.$refs.whatsAppSheet.open();
    },
    call(link) {
      window.open(link)
    },
    wasep(link) {
      window.open(link)
    },
    getClass() {
      return
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/black-jack');
@import url('https://fonts.cdnfonts.com/css/pulang');
@import url('https://fonts.cdnfonts.com/css/corbel');
@import url('https://fonts.cdnfonts.com/css/rupture-stamp');

.bottom-sheet__content {
  height: auto !important;
}

.v-bottom-navigation {
  height: 45px !important;
}

.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 12% !important;
  border-width: 0 0 1px;
}

.header {
  position: absolute;
  height: 60px;
  top: 0;
  right: 0;
  opacity: 70% !important;
  left: 0;
  z-index: 1030;
  box-sizing: border-box;
}

.content {
  background: #000000 !important;
  width: 100%;
  height: 100%;
  // padding: 60px 0;
  box-sizing: border-box;
}

.content-2 {
  background: #000000 !important;
  width: 100%;
  height: 100%;
  // padding: 60px 0;
  box-sizing: border-box;
}

.v-bottom-navigation__content {
  justify-content: space-around !important;
  background: burlywood !important;
  font-size: 1.25rem !important;
}

.word-1 {
  color: burlywood;
  text-align: center;
  font-family: 'BlackJack', sans-serif;
}

.word-2 {
  color: burlywood;
  font-family: 'Rupture Stamp', sans-serif;
  font-size: 80px;
  text-align: center;
}

.word-3 {
  color: burlywood;
  text-align: center;
  font-family: 'BlackJack', sans-serif;

}

.word-4 {
  color: burlywood;
  text-align: center;
  font-family: 'BlackJack', sans-serif;
}

.word-5 {
  color: burlywood;
  font-family: 'Corbel', sans-serif;
  text-align: center;
}

.word-6 {
  color: burlywood;
  font-family: 'Corbel', sans-serif;
  text-align: center;
  font-size: 16px !important;
}

.word-7 {
  color: burlywood;
  font-family: 'Corbel', sans-serif;
  text-align: center;
  font-size: 14px !important;
}

.top-renda {
  width: 100%;
  position: relative;
}

.bottom-renda {
  transform: rotate(1800deg);
  width: 100%;
  position: relative;
}

.example {
  height: 100vh !important;
  display: flex;
}

.imgflower {
  width: 50%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15%;
  opacity: 0.8;
}

.typewriter {
  display: inline-flex !important;

  div {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
  }
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange;
  }
}


.example {

  .overlay-1 {
    position: absolute;
    top: 25%;
    width: 100% !important;
    font-weight: bold;
    text-align: right;
    font-size: 20px;
  }

  .overlay-2 {
    position: absolute;
    top: 47%;
    width: 100% !important;
    font-weight: bold;
    text-align: right;
    font-size: 20px;
  }

  .overlay-3 {
    position: absolute;
    top: 47%;
    width: 100% !important;
    font-weight: bold;
    text-align: right;
    font-size: 20px;
  }

  .overlay-4 {
    position: absolute;
    top: 75%;
    width: 100% !important;
    font-weight: bold;
    text-align: right;
    font-size: 15px;
  }

  .overlay-5 {
    position: absolute;
    top: 65%;
    width: 100% !important;
    font-weight: bold;
    text-align: right;
    font-size: 20px;
  }

}

.ring {
  width: 20%;
  display: flex;
  margin: auto;
  filter: contrast(0.4) !important;
}

.col {
  display: flex;
  justify-content: space-between;
}

.top-bottom {
  position: relative;
}

.top-bottom img {
  position: relative;
  top: 65px;
  right: 0px;
}

.top-left {
  max-height: 100px;
  left: 0;
}

.top-right {
  max-height: 100px;
  right: 0;
  transform: rotate(90deg);
}

.bottom-left {
  max-height: 100px;
  left: 0;
  top: 30px !important;
  transform: rotate(270deg);
}

.bottom-right {
  max-height: 100px;
  right: 0;
  top: 30px !important;
  transform: rotate(180deg);
}


.shimmer {
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/350% 100%;
  background-repeat: no-repeat;
  animation: shimmer 5s infinite;
}

@keyframes shimmer {
  100% {
    -webkit-mask-position: left
  }
}
</style>