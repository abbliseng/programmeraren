import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/compat/app";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {},
    currentPage: 'home',
    a: {
      show: true,
      type: "success",
      message: "wow u did it!",
      dismissTimer: 3,
      dismissCountDown: 0
    }
  },
  getters: {
    async getSignInStatus() {
      return await ((firebase.auth().currentUser) ? true : false)
    }
  },
  mutations: {
    setCurrentPage(state, p) {
      state.currentPage = p
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setAlert(state, val) {
      // this.$store.state.a.dismissCountDown = this.$store.state.a.dismissTimer
      state.a.message = val.message;
      state.a.type = val.type;
      state.a.dismissCountDown = state.a.dismissTimer;
    }
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(() => {
          // this.commit("successLogin", ["Inloggningen lyckades!", "success"]);
          this.dispatch("sendAlert", {type:"success", message:"Inloggningen lyckades!"})
          router.push("/account")
        }).catch(() => {
          this.dispatch("sendAlert", {type:"danger", message:"Inloggningen misslyckades!"})
          // this.commit("successLogin", ["Inloggningen misslyckades!", "error"]);
        });
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await firebase.firestore().collection("users").doc(user.uid).get();
      commit("setUserProfile", userProfile.data());
      // router.push("/");
    },
    async signup({ dispatch }, form) {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(
        form.email, form.password,
      );
      await firebase.firestore().collection("users").doc(user.uid).set({
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        class: form.class
      });
      await firebase.firestore().collection("classes").doc(form.class).collection("users").doc(user.uid).set({})
      dispatch("fetchUserProfile", user);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      // this.commit("successLogin", ["Utloggningen lyckades!", "success"]);
      commit("setUserProfile", {});
      router.push("/signin");
    },
    async sendAlert({ commit }, a) {
      commit("setAlert", a)
    }
  },
  modules: {
  }
})
