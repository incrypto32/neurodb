<template>
  <v-container>
    <v-row class="justify-center align-center" v-if="loading" id="loading">
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="mb-6"
      ></v-progress-circular>
    </v-row>

    <div v-else>
      <v-row justify="center" class="ma-3">
        <h2>
          Add New Patient
        </h2>
      </v-row>

      <template>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.name"
                  :rules="nameRules"
                  outlined
                  dense
                  class="pa-0"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" class="py-0 px-3">
                <v-text-field
                  v-model="patient.sex"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Sex"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" class="py-0 px-3">
                <v-text-field
                  v-model="patient.age"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Age"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="2" class="py-0 px-3">
                <v-text-field
                  v-model="patient.room"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Room"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0 px-3">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="patient.date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="patient.date"
                      label="Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="patient.date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(patient.date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6" class="py-0 px-3">
                <v-textarea
                  v-model="patient.address"
                  label="Address"
                  outlined
                  dense
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.phone"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Phone"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-container class="pa-4"></v-container>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.diagnosis.pd1"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Provisional Diagnosis 1"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.diagnosis.pd2"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Provisional Diagnosis 2"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.diagnosis.pd3"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Provisional Diagnosis 3"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-container class="pa-4"></v-container>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.diagnosis.final"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Final Diagnosis"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.diagnosis.icd"
                  :rules="nameRules"
                  outlined
                  dense
                  label="ICD - Coding"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-2 px-3">
                <h2>Present History</h2>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.presentHistory.ph1.description"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Present History"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" class="py-0 px-3">
                <v-text-field
                  v-model="patient.presentHistory.ph1.duration"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Duration"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.presentHistory.ph2.description"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Present History"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" class="py-0 px-3">
                <v-text-field
                  v-model="patient.presentHistory.ph2.duration"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Duration"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-0 px-3">
                <v-text-field
                  v-model="patient.presentHistory.ph3.description"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Present History"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" class="py-0 px-3">
                <v-text-field
                  v-model="patient.presentHistory.ph3.duration"
                  :rules="nameRules"
                  outlined
                  dense
                  label="Duration"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-1 px-3">
                <h2>Past History</h2>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="patient.pastHistory.diabetes"
                  label="Diabetes"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-checkbox
                  v-model="patient.pastHistory.hyperTension"
                  label="Hyper tension"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-checkbox
                  v-model="patient.pastHistory.cva"
                  label="CVA"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-checkbox
                  v-model="patient.pastHistory.cad"
                  label="CAD"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-textarea
                  class="py-3 my-3"
                  v-model="patient.pastHistory.other"
                  label="Others"
                  outlined
                  dense
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-textarea
                  class="py-3 my-3"
                  v-model="patient.currentMedication"
                  label="Current Medication"
                  outlined
                  dense
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4" class="py-1 px-3">
                <h2>Personal History</h2>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="patient.personalHistory.currentSmoker"
                  label="Current Smoker"
                  color="red"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="patient.personalHistory.exSmoker"
                  label="Ex Smoker"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-checkbox
                  v-model="patient.personalHistory.alcoholic"
                  label="Alcoholic"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-text-field
                  class="py-3 my-3"
                  v-model="patient.personalHistory.sleep"
                  label="Sleep"
                  outlined
                  dense
                />

                <v-text-field
                  class="py-3 my-3"
                  v-model="patient.personalHistory.bowelBladderHistory"
                  label="Bowel/Bladder history"
                  outlined
                  dense
                />

                <v-textarea
                  class="py-3 my-3"
                  v-model="patient.personalHistory.familyHistory"
                  label="Family history"
                  outlined
                  dense
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-textarea
                  class="py-3 my-3"
                  v-model="patient.personalHistory.otherRemarks"
                  label="Other Remarks"
                  outlined
                  dense
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-bottom-navigation fixed>
          <v-col>
            <v-progress-circular
              v-if="submitLoading"
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-col>

          <v-spacer></v-spacer>
          <v-btn  v-on:click="submit(true)">
            <h3>Save</h3>
          </v-btn>

          <v-btn v-if="edit"  v-on:click="submit()">
            <h3>Next</h3>
          </v-btn>

        </v-bottom-navigation>
      </template>
    </div>
    <v-snackbar v-model="snackBar" :timeout="2000">
      {{ message }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { store } from "@/ts/firebase_helper";
import { Patient, PatientInterface } from "@/ts/models/models";
import { FireStoreHelper } from "@/ts/services/firestore";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {

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
  submitLoading = false;
  nameRules = [(v: any) => !!v || "field is required"];

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

  showMessage(msg: string) {
    this.message = msg;
    this.snackBar = true;
  }

  onClick() {
    console.log("HEY BUDDIES");
    console.log(JSON.stringify(this.patient));
  }

  async submit(save=false) {
    if(this.loading){
      return
    }
    this.submitLoading = true;
    try {
      if (!this.edit) {
        const id = await store.addPatient(this.patient);
        console.log(id);
        if (id) {
          this.$router.replace({ path: `/patients/edit/${id}` });
        }
      } else {
        const success = await store.editPatient(
          this.$route.params.id,
          this.patient
        );
        if (success) {
          if (save) {
            this.showMessage("Successfully saved");
          }else{
            this.$router.push({path:`/patients/vitals/${this.$route.params.id}`})
          }
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
