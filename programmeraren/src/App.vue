<template>
  <div id="app">
    <b-navbar class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- <b-navbar-nav> -->
        <b-button href="/account" class="bg-dark" pill style="margin-left: 1rem;">
          <b-icon icon="person-fill"></b-icon>
        </b-button>
      <!-- </b-navbar-nav> -->
      <a class="navbar-brand mb-0 h1" style="margin-left: 1rem;" href="/">
        <!-- <span class="badge bg-warning">WIP</span> -->
        Programmeraren
      </a>
      <b-navbar-nav>
        <a id="projects" class="nav-item nav-link" href="/projects">Projekt</a>
        <a id="course_material" class="nav-item nav-link" href="/course_material">Läromedel</a>
        <a id="tasks" class="nav-item nav-link" href="/tasks">Uppgifter</a>
        <!-- <a id="account" class="nav-item nav-link" href="/account">Konto</a> -->
      </b-navbar-nav>
    </b-navbar>
    <b-alert :variant="$store.state.a.type" :show="$store.state.a.dismissCountDown" fade
      @dismiss-count-down="countDownChanged">
      {{ $store.state.a.message }}
    </b-alert>
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
    getUserStatus() {
      return this.$firebase.auth().currentUser
    },
    countDownChanged(dismissCountDown) {
      this.$store.state.a.dismissCountDown = dismissCountDown
    },
    showAlert() {
      // this.$store.state.a.dismissCountDown = this.$store.state.a.dismissTimer
      this.$store.dispatch("sendAlert", { message: "hewwo", type: "warning" })
    }
  },
  mounted() {
    // console.log("Current user:",this.$firebase.auth().currentUser)
    // this.$store.commit("setCurrentUser", this.$firebase.auth().currentUser)
    // console.log(this.$store.getters.getCurrentUser)
    if (this.$store.state.currentPage != "home" && this.$store.state.currentPage != "" && this.$store.state.currentPage != "signin" && this.$store.state.currentPage != "account" && this.$store.state.currentPage != "create_new_projects") {
      document.getElementById(this.$store.state.currentPage).className += " active"
    }
  }
}
</script>
