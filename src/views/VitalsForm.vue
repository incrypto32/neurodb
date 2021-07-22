<template>
  <v-container class="grey--text text--darken-2">
    <v-row class="justify-center align-center" v-if="loading" id="loading">
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="mb-6"
      ></v-progress-circular>
    </v-row>
    <div v-else>
      <v-container v-if="dataError">
        <v-row class="justify-center align-center">
          <div>An error occured please try again later</div>
        </v-row>
      </v-container>

      <div v-else>
        <h2>{{ patient.name }}</h2>

        <v-row>
          <v-col md="2" cols="12"> Sex : {{ patient.sex }}</v-col>

          <v-col md="2" cols="12">Age : {{ patient.age }}</v-col>
          <v-col md="2" cols="12">Room : {{ patient.room }}</v-col>
          <v-col md="2" cols="12">Date : {{ patient.date.toDate() }}</v-col>
        </v-row>

        <v-row>
          <v-col>
            <h3>Patient ID : {{ patient.id }}</h3></v-col
          >
        </v-row>

        <v-row class="my-2">
          <v-col> <h3>Vitals Examination</h3></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" class="">
            <v-text-field
              v-model="patient.vitals.bp"
              :rules="nameRules"
              outlined
              rounded
              dense
              label="BP"
              color="grey"
              suffix="mmHg"
              required
            ></v-text-field>

            <v-text-field
              v-model="patient.vitals.pulse"
              :rules="nameRules"
              outlined
              rounded
              dense
              label="Pulse Rate"
              suffix="/m"
              required
            ></v-text-field>

            <v-text-field
              v-model="patient.vitals.respRate"
              :rules="nameRules"
              outlined
              rounded
              dense
              label="Respiration Rate"
              suffix="/m"
              required
            ></v-text-field>

            <v-text-field
              v-model="patient.vitals.sp02"
              :rules="nameRules"
              outlined
              rounded
              dense
              label="Sp02"
              suffix="%"
              required
            ></v-text-field>

            <v-text-field
              v-model="patient.vitals.grbs"
              :rules="nameRules"
              outlined
              rounded
              dense
              label="GRBS"
              plceholder="XX Mm/dL"
              suffix="Mm/dL"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="my-2">
          <v-col> <h3>Higher Mental Function</h3></v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.higherMentalFunction.levelOfConsiousness"
              autocomplete="email"
              label="Level of consiousness"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.higherMentalFunction.memory"
              label="Memory"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.higherMentalFunction.attention"
              label="Attention"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.higherMentalFunction.speech"
              label="Speech"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.higherMentalFunction.mmse"
              label="MMSE"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="my-2">
          <v-col> <h3>Cranial Nerve</h3></v-col>
        </v-row>
     <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.cranialNerve"
              label="Cranial Nerve"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.motorSystem"
              label="Motor System"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.sensorySystem"
              label="Sensory System"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.cerebellarSign"
              label="Cerebellar Sign"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.meningealSign"
              label="Meningeal Sign"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.peripheralNerves"
              label="Peripheral Nerves"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="py-0 px-3">
            <v-text-field
              v-model="patient.cranialNerve.skullAndSpine"
              label="Skull And Spine"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-bottom-navigation fixed app>
          <v-spacer></v-spacer>

          <v-btn value="recent" v-on:click="submit(true)">
            <h3>Save</h3>
          </v-btn>
          <v-btn value="recent" v-on:click="submit()">
            <h3>Next</h3>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </div>
    <v-snackbar v-model="snackBar" :timeout="2000">
      {{ message }}
    </v-snackbar>
  </v-container>
</template>
<script lang="ts">
import { store } from "@/ts/firebase_helper";
import { Patient, PatientInterface } from "@/ts/models/models";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class VitalForm extends Vue {
  @Prop({
    type: Boolean,
    default: false,
  })
  edit!: boolean;

  patient: PatientInterface = new Patient();

  modal = false;
  valid = true;
  snackBar = false;
  message = "";
  loading = true;
  dataError = false;
  submitLoading = false;
  sex=["Male","Female","Other"]
  nameRules = [(v: any) => !!v || "field is required"];

  async created() {
    console.log("Created called");

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
      this.dataError = true;
    }
    this.loading = false;
    console.log("----get patient end----");
  }

  showMessage(msg: string) {
    this.message = msg;
    this.snackBar = true;
  }

  onClick() {
    console.log("HEY BUDDIES");
    console.log(JSON.stringify(this.patient));
  }

  async submit(save = false) {
    this.submitLoading = true;
    try {
      const success = await store.editPatient(
        this.$route.params.id,
        this.patient
      );
      if (success) {
        if (save) {
          this.showMessage("Successfully saved");
        } else {
          this.$router.push({
            path: `/patients/success/${this.$route.params.id}`,
          });
        }
      }
    } catch (error) {
      console.log(error);
      this.showMessage("An error occured");
    }

    this.submitLoading = false;
  }
}
</script>
<style scoped>
#loading {
  height: 100vh;
}
</style>
