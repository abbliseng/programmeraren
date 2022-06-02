<template>
  <div id="app">
    <b-navbar class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- <b-navbar-nav>
        <b-nav-item href="#"></b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->
      <a class="navbar-brand mb-0 h1" style="margin-left: 1rem;" href="/">
        <!-- <span class="badge badge-warning">WIP</span> -->
        <!-- <b-badge>New</b-badge> -->
        <span class="badge bg-warning">WIP</span>
        Programmeraren
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a id="projects" class="nav-item nav-link" href="/projects">Projekt</a>
          <a id="course_material" class="nav-item nav-link disabled" href="/course_material">Läromedel</a>
          <a id="tasks" class="nav-item nav-link disabled" href="/tasks">Uppgifter</a>
          <a id="account" class="nav-item nav-link" href="/account">Konto</a>
          <b-button @click="$store.dispatch('logout')" v-if="getUserStatus()">Logga ut</b-button>
        </div>
      </div>
    </b-navbar>
    <b-alert 
      :variant="$store.state.a.type"
      :show="$store.state.a.dismissCountDown"
      fade
      @dismiss-count-down="countDownChanged"
    >
      {{ $store.state.a.message }}
    </b-alert>
    <!-- <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button> -->
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(["userProfile"])
  },
  methods: {
      getUserStatus(){
        return this.$firebase.auth().currentUser
      },
      countDownChanged(dismissCountDown) {
        this.$store.state.a.dismissCountDown = dismissCountDown
      },
      showAlert() {
        // this.$store.state.a.dismissCountDown = this.$store.state.a.dismissTimer
        this.$store.dispatch("sendAlert", {message: "hewwo", type: "warning"})
      }
    },
  mounted() {
    // console.log("Current user:",this.$firebase.auth().currentUser)
    // this.$store.commit("setCurrentUser", this.$firebase.auth().currentUser)
    // console.log(this.$store.getters.getCurrentUser)
    if (this.$store.state.currentPage != "home" && this.$store.state.currentPage != "" && this.$store.state.currentPage != "signin") {
      document.getElementById(this.$store.state.currentPage).className += " active"
    }
  }
}
</script>
