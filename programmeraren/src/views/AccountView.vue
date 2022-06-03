<template>
  <div class="row justify-content-center no-gutters">
    <b-card bg-variant="dark" text-variant="white" class="col-6" title="Konto" style="margin-top: 1rem;">
      
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted () {
    // console.log("wa")
    // this.$db.collection("users").doc(this.$firebase.auth().currentUser.uid).get()
    //   .then((payload) => {
    //     if ("admin" in payload.data()) {
    //       console.log(payload.data().admin)
    //     }
    //     // console.log(payload.data())
    //   })
    console.log(this.$store.state.userProfile)
  }
}
</script>
