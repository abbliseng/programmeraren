import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';// import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'

const firebaseConfig = {
    apiKey: "AIzaSyBxGWhCtNC0X8Kwpgj685NuUkSYUjk1yjU",
    authDomain: "abb-programmeraren.firebaseapp.com",
    databaseURL: "https://abb-programmeraren-default-rtdb.firebaseio.com",
    projectId: "abb-programmeraren",
    storageBucket: "abb-programmeraren.appspot.com",
    messagingSenderId: "273252324191",
    appId: "1:273252324191:web:85a5fc796716943cd2dcea"
};
// eslint-disable-next-line
var fb = firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = fb
Vue.prototype.$db = fb.firestore()

// firebase.initializeApp(firebaseConfig);
// this.$store.commit("setFirebase", firebase)
// const firestore = firebase.firestore();
// this.$store.commit("setDb", firestore)


// Import Bootstrap and BootstrapVue CSS files (order is important)
Vue.use(firestorePlugin)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.prototype.$test = 'hello there'

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount("#app")
  }
  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
})


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
