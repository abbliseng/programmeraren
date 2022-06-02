<template>
  <div class="row justify-content-center">
    <b-card
      class="col-4 bg-dark text-light"
      style="margin-top: 10px"
      title="Logga in"
      v-if="!registerUser"
    >
      <b-form
        class="row justify-content-center"
        @submit="onSubmit"
        @reset="onReset"
      >
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          class="text-light"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ange email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Lösenord:"
          label-for="input-1"
          class="text-light"
        >
          <b-form-input
            id="input-1"
            v-model="form.password"
            type="password"
            placeholder="Ange lösenord"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          class="col-12 bg-light text-black"
          style="max-width: 94%; margin-top: 25px"
          @click="login(form.email, form.password)"
          >Logga in</b-button
        >
        <b-button
          class="col-12 bg-light text-black"
          style="max-width: 94%; margin-top: 10px"
          size="sm"
          @click="
            registerUser = true;
            addClasses();
            resetForm();
          "
          >Har du inget konto?</b-button
        >
      </b-form>
    </b-card>

    <b-card
      class="col-4 bg-dark text-light"
      style="margin-top: 10px"
      title="Registrera"
      v-if="registerUser"
    >
      <b-form
        class="row justify-content-center"
        @submit="onSubmit"
        @reset="onReset"
      >
        <b-form-group
          id="input-group-1"
          label="Förnamn:"
          label-for="input-1"
          class="text-light"
        >
          <b-form-input
            id="input-1"
            v-model="form.firstname"
            type="text"
            placeholder="Ange förnamn"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Efternamn:"
          label-for="input-1"
          class="text-light"
        >
          <b-form-input
            id="input-1"
            v-model="form.lastname"
            type="text"
            placeholder="Ange efternamn"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          class="text-light"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ange email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Lösenord:"
          label-for="input-1"
          class="text-light"
        >
          <b-form-input
            id="input-1"
            v-model="form.password"
            type="password"
            placeholder="Ange lösenord"
            required
          ></b-form-input>
        </b-form-group>

        <div class="mt-3">Ange klass:</div>
        <b-form-select
          v-model="form.class"
          :options="options"
          style="max-width: 94%; min-height: 35px"
        ></b-form-select>
        <b-button
          class="col-12 bg-light text-black"
          style="max-width: 94%; margin-top: 25px"
          @click="register()"
          >Registrera konto</b-button
        >
        <b-button
          class="col-12 bg-light text-black"
          size="sm"
          style="max-width: 94%; margin-top: 10px"
          @click="registerUser = false; resetForm()"
          >Har du redan ett konto?</b-button
        >
      </b-form>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerUser: false,
      password: "",
      email: "",
      form: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        class: null,
      },
      options: [{ value: null, text: "Ange klass" }],
      
    };
  },
  methods: {
    register() {
      this.$store.dispatch("signup", {
        email: this.form.email,
        password: this.form.password,
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        class: this.form.class
      });
      this.resetForm();
      this.registerUser = false;
    },
    login(email, password) {
      this.$store.dispatch("login", {
        email: email,
        password: password
      });
      this.resetForm()
    },
    resetForm() {
      this.form.email = "";
      this.form.password = "";
      this.form.firstname = "";
      this.form.lastname = "";
      this.form.class = null;
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.firstname = "";
      this.form.lastname = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    addClasses() {
      this.$db
        .collection("classes")
        .get()
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            this.options.push({ value: doc.id, text: doc.id });
          });
        });
    },
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
  },
  mounted() {
    // this.$db.collection("classes")
    //   .get()
    //   .then((snapshots) => {
    //     snapshots.forEach(function(doc) {
    //       // this.options.push({
    //       //   value: doc.id,
    //       //   text: doc.id
    //       // })
    //       // console.log(this.options)
    //       this.addClass(doc.id)
    //       console.log(doc.id)
    //     })
    //   })
    // .collection("chapters")
    //                 .get()
    //                 .then((snapshots) => cleanData(snapshots)).then((chapters) => {
    //                     return chapters
    //                 });
  },
};
</script>

<style>
input {
  margin-right: 20px;
}
</style>