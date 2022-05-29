<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand mb-0 h1" style="margin-left: 1rem;" href="/">
        <!-- <span class="badge badge-warning">WIP</span> -->
        <!-- <b-badge>New</b-badge> -->
        <span class="badge bg-warning">WIP</span>
        Programmeraren
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a id="projects" class="nav-item nav-link" href="/projects">Projekt</a>
          <a id="course_material" class="nav-item nav-link" href="/course_material">Läromedel</a>
          <a id="tasks" class="nav-item nav-link disabled" href="/tasks">Uppgifter</a>
          <a id="account" class="nav-item nav-link disabled" href="/account">Konto</a>
          <!-- <b-tabs content-class="mt-3">
            <b-tab title="First" active>
              <p>I'm the first tab</p>
            </b-tab>
            <b-tab title="Second">
              <p>I'm the second tab</p>
            </b-tab>
            <b-tab title="Disabled" disabled>
              <p>I'm a disabled tab!</p>
            </b-tab>
          </b-tabs> -->
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';// import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxGWhCtNC0X8Kwpgj685NuUkSYUjk1yjU",
    authDomain: "abb-programmeraren.firebaseapp.com",
    databaseURL: "https://abb-programmeraren-default-rtdb.firebaseio.com",
    projectId: "abb-programmeraren",
    storageBucket: "abb-programmeraren.appspot.com",
    messagingSenderId: "273252324191",
    appId: "1:273252324191:web:85a5fc796716943cd2dcea"
};



export default {
  data() {
    return {}
  },
  methods: {
    },
  mounted() {
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    this.$store.commit("setDb", firestore)
    // Update navbar to show which is selected
    if (this.$store.state.currentPage != "home" && this.$store.state.currentPage != "") {
      document.getElementById(this.$store.state.currentPage).className += " active"
    }
  }
}
</script>
