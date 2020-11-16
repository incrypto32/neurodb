<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <h2 class="dark--text">Neuro<b> DB</b></h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/" text>
      <span class="mr-2">Home</span>
    </v-btn>

    <v-btn  text>
      <span class="mr-2">All Patients</span>
    </v-btn>

    <v-btn text>
      <span class="mr-2">Add Patient</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppBar",
});
</script>
