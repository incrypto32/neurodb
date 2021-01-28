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
        <h3>{{ patient.name }}</h3>
      </v-row>

      <v-row>
        <v-col class="pa-0" md="2" cols="12"> Sex : {{ patient.sex }}</v-col>
        <v-col class="pa-0" md="2" cols="12">Age : {{ patient.age }}</v-col>
        <v-col class="pa-0" md="2" cols="12">Room : {{ patient.room }}</v-col>
        <v-col class="pa-0" md="2" cols="12">Date : {{ getDate() }}</v-col>
      </v-row>
      <v-row class="py-5">
        <h4>Patient ID : #12345</h4>
      </v-row>
      <v-row class="py-5">
        <h4>Patient Files</h4>
      </v-row>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Title</th>
              <th class="text-left">Download</th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in patientFiles" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.title }}</td>
              <v-btn depressed color="success" :href="item.url">
                Download
              </v-btn>

              <td>
                <v-btn
                  depressed
                  color="error"
                  @click="deleteFile(item.id, item.name)"
                >
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-row justify="center" class="ma-4">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on"
              >Upload New File</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Upload File</v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-text-field
                      v-model="uploadContent.title"
                      outlined
                      dense
                      label="Enter file title"
                      required
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-file-input
                      v-model="uploadContent.file"
                      truncate-length="15"
                    ></v-file-input>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
                <v-btn text @click="upload()">upload</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import { storage, store } from "@/ts/firebase_helper";
import { Patient, PatientInterface } from "@/ts/models/models";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  patient = new Patient();
  dialog = { value: false };
  uploadContent: any = {};
  patientFiles: Array<any> = [];
  patienFilesLoading = false;

  setFilesLoading(val: boolean) {
    this.patienFilesLoading = val;
  }

  getDate() {
    return this.patient.date.toDate() ?? "";
  }

  loading = true;

  async created() {
    console.log("Created called");
    const id = this.$route.params.id;

    await this.getPatient(this.$route.params.id);
    await this.getPatientFiles(this.$route.params.id);
  }

  upload() {
    if (!this.patienFilesLoading) {
      this.setFilesLoading(true);
      console.log(this.uploadContent.file);
      console.log(this.uploadContent.title);
      const absoluteFileName: string = this.uploadContent.file.name
        .split(".")
        .slice(0, -1)
        .join(".");
      const uploadFileName = `${absoluteFileName}_${Date.now().toString()}.${
        (this.uploadContent.file.name as string).split(".").reverse()[0]
      }`;
      console.log("Upload FIle Name : ", uploadFileName);
      storage.uploadPatientFile(
        this.patient.id,
        this.uploadContent.file,
        uploadFileName,
        (percent) => {
          console.log(`Percent : ${percent}`);
        },
        (err) => {
          console.log("Error while uploading to fire storage");
          this.setFilesLoading(false);
        },
        (url) => {
          console.log("Completed");
          store.addPatientFiles(
            this.patient.id,
            {
              name: uploadFileName,
              title: this.uploadContent.title,
              url: url,
            },
            () => {
              storage.deletePatientFile(
                this.patient.id,
                uploadFileName,
                () => {
                  console.log("Deleted Successfully");
                },
                () => {
                  console.log("Delete failed");
                }
              );
              this.setFilesLoading(false);
            },
            () => {
              this.uploadContent = {};
              this.dialog.value = false;
              this.getPatientFiles(this.patient.id);
              this.setFilesLoading(false);
            }
          );
        }
      );
    }
  }

  async deleteFile(id: string, fileName: string) {
    console.log(`${id} ${fileName}`);
    try {
      await store.deletePatientFile(this.patient.id, id);
      await storage.deletePatientFile(
        this.patient.id,
        fileName,
        () => {
          console.log("Deleted Successfully");
          this.getPatientFiles(this.patient.id);
        },
        () => {
          console.log("Delete failed");
        }
      );
    } catch (error) {
      console.log("Error Deleting file");
    }
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

  async getPatientFiles(id: string) {
    try {
      if (id) {
        this.patientFiles = await store.getPatientFiles(id);
      }
    } catch (error) {
      console.log("Error getting patient files");
    }
  }
}
</script>
