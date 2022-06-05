<template>
  <div class="row justify-content-center no-gutters">
    <b-card id="head" bg-variant="dark" text-variant="white" class="col-6" title="Konto" style="margin-top: 1rem;"
      :sub-title="$store.state.userProfile.admin ? 'Admin' : ''">
      <hr/>
      <b-card-text>
        <strong>Namn</strong> : {{$store.state.userProfile.firstname}} {{$store.state.userProfile.lastname}}
        <br/>
        <strong>E-mail</strong> : {{$store.state.userProfile.email}}
        <br/>
        <strong>Klass</strong> : {{$store.state.userProfile.class}}
      </b-card-text>
      <hr/>
      <b-button variant="primary" @click="$store.dispatch('logout')">Logga ut</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
