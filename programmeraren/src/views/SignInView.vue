<template>
  <div class="row justify-content-center" style="max-width: 100vw; margin-top: 25px;">
    <!-- <b-card title="Konto" tag="article"
      style="max-width: 30rem;" class="mb-2">
      <b-form>

      </b-form>
    </b-card> -->
    <form @submit.prevent="login" v-if="!registerUser">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">
        Login
      </button>
      <button @click="registerUser = true; email=''; password=''">
        Registrera istället
      </button>
    </form>

    <form @submit.prevent="register" v-if="registerUser">
      <h2>Register</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Register</button>
      <button @click="registerUser = false; email=''; password=''">
        Logga in istället
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerUser: false,
      password: '',
      email: ''
    }
  },
  methods: {
    register() {
      this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Successfully registered! Please login.');
          // this.$router.push('/');
          this.email = ''
          this.password = ''
          this.registerUser = false
        })
        .catch(error => {
          alert(error.message);
        });
    },
    login() {
      this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Successfully logged in');
          this.$store.commit("setCurrentUser", this.$firebase.auth().currentUser)
          this.$router.push('/');
        })
        .catch(error => {
          alert(error.message);
        });
    },
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13
    }
  }
}
</script>

<style>
input {
  margin-right: 20px;
}
</style>