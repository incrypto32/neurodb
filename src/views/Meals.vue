<template>
<div>
  <v-data-table
    :headers="headers"
    :items="patients"
    :loading="loading"
    loading-text="Loading .. Please wait"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>All Patients</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>

    <template v-slot:[`item.action`]="{ item }">
      <v-btn
        :color="item.closed ? 'success' : 'error'"
        min-width="100px"
        @click="changeStatus(item.id, !item.closed)"
        >{{ item.closed ? "open" : "close" }}</v-btn
      >
    </template>

    <template v-slot:[`item.locationUrl`]="{ item }">
      <a :href="item.locationUrl">GO</a>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <div class="px-4">
        <v-row justify="center">
          <v-btn class="mx-1" elevation="2" :to="`/patients/edit/${item.id}`" icon outlined>
            <v-icon small> mdi-pencil</v-icon>
          </v-btn>
            <v-btn class="mx-1" elevation="2" @click="deletePatient(item.id)"  icon outlined>
            <v-icon small> mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </div>
    </template>
    <template v-slot:no-data>
      <v-container pa-3></v-container>
      <v-btn color="primary" @click="initialize"> Retry </v-btn>
      <v-container v-if="error" text-center error--text
        >An error occured please try again</v-container
      >
    </template>
  </v-data-table>
     <v-snackbar v-model="snackBar" :timeout="2000">
      {{ message }}
    </v-snackbar>
</div>

</template>

<script lang="ts">
import { store } from "@/ts/firebase_helper";
import { PatientInterface } from "@/ts/models/models";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Store } from "vuex";

@Component({})
export default class Stores extends Vue {
  search = "";
  loading = false;
  error = false;
  message="";
  snackBar=false;
  patients: Array<PatientInterface> = [];

  headers: object[] = [
    {
      text: "Name",
      align: "start",
      value: "name",
    },

    {
      text: "Address",
      align: "start",
      value: "address",
    },
     {
      text: "Date",
      align: "start",
      value: "date",
    },
        {
      text: "Final Diagnosis ",
      align: "start",
      value: "diagnosis.final",
    },
    {
      text: "Sex",
      align: "start",
      value: "sex",
    },
    {
      text: "Age",
      align: "start",
      value: "age",
    },
    {
      text: "Action",
      align: "center",
      value: "actions",
    },
  ];

  created() {
    this.initialize();
  }

  async initialize() {
    this.loading = true;
    try {
      this.patients = await store.getAllPatients();
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
    showMessage(msg: string) {
    this.message = msg;
    this.snackBar = true;
  }

  async deletePatient(id: string){
    console.log("DELTE")
   if( await store.deletePatient(id)){
     this.initialize()
     this.showMessage("Successfully deleted")
   }else{
     this.showMessage("An error occured please try again")
   }
  }
}
</script>
