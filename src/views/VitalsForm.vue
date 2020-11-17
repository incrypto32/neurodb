<template>
  <v-container class="grey--text text--darken-2">
    <h2>Hemanth</h2>

    <v-row>
      <v-col sm="2" cols="12"> Sex : Male</v-col>
      <v-col sm="2" cols="12">Age : 42</v-col>
      <v-col sm="2" cols="12">Room : 101</v-col>
      <v-col sm="2" cols="12">Date : 21/11/21</v-col>
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
          suffix="Mm of Hg"
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
          v-model="patient.cranialNerve.cerebralSign"
          label="Cerebral Sign"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          v-model="patient.cranialNerve.cerebralSign"
          label="Meneningeal Sign"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          v-model="patient.cranialNerve.menengialSign"
          label="Periferal Nerves"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          v-model="patient.cranialNerve.periferalNerves"
          label="Skull And Spine"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-bottom-navigation fixed app>
      <v-spacer></v-spacer>

      <v-btn value="recent">
        <h3>Save</h3>
      </v-btn>
      <v-btn value="recent">
        <h3>Next</h3>
      </v-btn>
      <v-btn value="recent" v-on:click="onClick">
        <h3>Blah</h3>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>
<script lang="ts">
import { Patient } from "@/ts/models/models";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class VitalForm extends Vue {
  @Prop({
    type: Object,
    default: () => new Patient(),
  })
  patient!: Patient;
  modal = false;
  valid = true;
  nameRules = [(v: any) => !!v || "Email is required"];

  onClick() {
    console.log("HEY BUDDIES");
    console.log(JSON.stringify(this.patient));
  }
}
</script>
