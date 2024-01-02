import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from "firebase/app";
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import Vue3TouchEvents from "vue3-touch-events";
loadFonts()
const firebaseConfig = {
  apiKey: "AIzaSyBTr5xRWHdKg3LhPAYx9tUWSZNxVeObGio",
  authDomain: "roslanxainaa.firebaseapp.com",
  projectId: "roslanxainaa",
  storageBucket: "roslanxainaa.appspot.com",
  messagingSenderId: "538304667730",
  appId: "1:538304667730:web:0856a89e8c5a66fa51ff8b",
  measurementId: "G-W34B5C4HPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App)
  .use(vuetify)
  .use(VueBottomSheet)
  .use(Vue3TouchEvents)
  .use(app)
  .mount('#app')
