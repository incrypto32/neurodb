<template>
  <v-container>
    <v-row justify="center">
      <v-btn to="/patients/add" color="secondary" outlined rounded class="pa-10 my-5" width="75%">
        ADD New Patient
      </v-btn>
    </v-row>


    <v-row justify="center">
      <v-btn color="secondary" outlined rounded class="pa-10 my-5" width="75%">
        View All Patients
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>
