// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import *  as fb from 'firebase'

import  {store} from  './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBTzXqaCXEdbWdemoDygvZKmrHvMSJ3GuA",
      authDomain: "geo-loc-ninjas.firebaseapp.com",
      databaseURL: "https://geo-loc-ninjas.firebaseio.com",
      projectId: "geo-loc-ninjas",
      storageBucket: "geo-loc-ninjas.appspot.com",
      messagingSenderId: "189629375590",
      appId: "1:189629375590:web:bb5cb4fffa49b5556939a7"
    };
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);

    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

  }

})
