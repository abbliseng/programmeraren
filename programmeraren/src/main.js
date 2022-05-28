// import { createApp } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
// import firebase from "firebase";

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const firebaseConfig = {
    apiKey: "AIzaSyBxGWhCtNC0X8Kwpgj685NuUkSYUjk1yjU",
    authDomain: "abb-programmeraren.firebaseapp.com",
    databaseURL: "https://abb-programmeraren-default-rtdb.firebaseio.com",
    projectId: "abb-programmeraren",
    storageBucket: "abb-programmeraren.appspot.com",
    messagingSenderId: "273252324191",
    appId: "1:273252324191:web:85a5fc796716943cd2dcea"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)

app.mount('#app')
