<template>

  <v-container>
    <v-row v-if="loading">
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="mb-6"
      ></v-progress-circular>
    </v-row>
    <div v-else>
    <v-row justify="center">
      <h2 class="text-center">Upload Successful</h2>
    </v-row>
    <v-row class="py-4">
      <h3>{{patient.name}}</h3>
    </v-row>

    <v-row>
      <v-col class="pa-0" md="2" cols="12"> Sex : {{ patient.sex }}</v-col>
      <v-col class="pa-0" md="2" cols="12">Age : {{ patient.age }}</v-col>
      <v-col class="pa-0" md="2" cols="12">Room : {{ patient.room }}</v-col>
      <v-col class="pa-0" md="2" cols="12">Date : {{ patient.date }}</v-col>
    </v-row>
    <v-row class="py-5">
      <h4>Patient ID : #12345</h4>
    </v-row>
    <v-row justify="center">
      <v-btn color="primary" to="/">
        Go back to Home
      </v-btn>
    </v-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import { store } from "@/ts/firebase_helper";
import { Patient, PatientInterface } from "@/ts/models/models";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
 
  patient=new Patient()

  loading = true;

  async created() {
    console.log("Created called");
    const id = this.$route.params.id;

    await this.getPatient(this.$route.params.id);
  }

  async getPatient(id: string) {
    console.log("----get patient----");
    this.loading = true;
    try {
      if (id) {
        const patient = await store.getPatient(id);
        this.patient = patient;
      }
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
    console.log("----get patient end----");
  }
}
</script>
