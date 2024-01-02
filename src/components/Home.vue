<template>
  <v-card class="mx-auto overflow-hidden" height="100vh" max-width="500">
    <v-bottom-navigation :value="activeBtn" absolute hide-on-scroll horizontal scroll-threshold="500"
      scroll-target="#scroll-threshold-example">
      <v-btn @click="openCallerDrawer(1)">
        <v-icon>mdi-phone-dial</v-icon>
      </v-btn>

      <v-btn @click="openCalendarDrawer(2)">
        <v-icon>mdi-calendar-check</v-icon>
      </v-btn>

      <v-btn @click="openMapsDrawer(2)">
        <v-icon>mdi-map-marker-distance</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-sheet class="overflow-y-auto" max-height="100vh">
      <!-- <v-responsive height="100vh" class="tabs-body">
        <div class="example">
          <img class="background-image" src="../assets/renda.png">
          <img class="background-image imgflower" src="../assets/flower-big.svg">
          <div class="overlay">

            <div class="font-weight-light word-1">
              WALIMATULURUS
            </div>
            <br />
            <div class="font-weight-light word-2">
              R & A
            </div>
            <br />
            <div class="font-weight-light word-3">
              ROSLAN & AINAA
            </div>
            <br />
            <div class="font-weight-light word-4">
              AHAD | 13.11.2022
            </div><br />
          </div>

          <img class="background-image bottom-renda" src="../assets/renda.png">
        </div>
      </v-responsive> -->


      <v-responsive height="100vh" class="tabs-body">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col class="col">
              <img class="background-image top-renda" src="../assets/renda.png">
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="top-col">
              <div class="example">
                <img class="background-image imgflower" src="../assets/flower-big.svg">
                <div class="overlay">
                  <div class="font-weight-light word-1">
                    WALIMATULURUS
                  </div>
                  <br />
                  <div class="font-weight-light word-2">
                    R & A
                  </div>
                  <br />
                  <div class="font-weight-light word-3">
                    ROSLAN & AINAA
                  </div>
                  <br />
                  <div class="font-weight-light word-4">
                    AHAD | 13.11.2022
                  </div><br />
                </div>

              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="col">
              <img class="background-image bottom-renda" src="../assets/renda.png">
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>


      <v-responsive height="100vh" class="tabs-body">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col class="col">
              <img src="../assets/side.png" class="ribbon top-left" alt="" />
              <img src="../assets/side.png" class="ribbon top-right" alt="" />
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="top-col">
              <div class="content">

              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="col">
              <img src="../assets/side.png" class="ribbon bottom-left" alt="" />
              <img src="../assets/side.png" class="ribbon bottom-right" alt="" />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </v-sheet>
  </v-card>
</template>
<script>

export default {
  name: 'HomeComponent',
  // components: { Vodal },
  data: () => ({
    activeBtn: 1,
  }),
  methods: {
  },
}
</script>

<style lang="scss">
@import url('http://fonts.cdnfonts.com/css/black-jack');

.v-bottom-navigation__content {
  justify-content: space-around !important;
}

.word-1 {
  color: burlywood;
  text-align: center;
  font-family: 'Mansalva', sans-serif;
}

.word-2 {
  color: burlywood;
  font-family: 'BlackJack', sans-serif;
  font-size: 40px;
  text-align: center;
}

.word-3 {
  color: burlywood;
  text-align: center;
  font-family: 'Mansalva', sans-serif;

}

.word-4 {
  color: burlywood;
  text-align: center;
  font-family: 'Mansalva', sans-serif;
}

.tabs-body {
  background: #000000 !important;

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
  height: 75vh !important;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.imgflower {
  left: 50% !important;
  height: 100% !important;
  position: relative;
}


.example .overlay {
  position: absolute;
  top: 45%;
  right: 65%;
  color: red;
  font-weight: bold;
  text-align: right;
  font-size: 15px;
}

.col {
  display: flex;
  justify-content: space-between;
}

.top-bottom {
  position: relative;
}

.top-bottom img {
  position: absolute;
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

.content {
  height: 60vh !important;
}
</style>