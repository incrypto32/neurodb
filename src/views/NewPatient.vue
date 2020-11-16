<template>
  <div>
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
                v-model="name"
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
                v-model="firstname"
                :rules="nameRules"
                outlined
                dense
                label="Sex"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2" class="py-0 px-3">
              <v-text-field
                v-model="lastname"
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
                v-model="lastname"
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
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" class="py-0 px-3">
              <v-textarea
                autocomplete="email"
                label="Address"
                outlined
                dense
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="py-0 px-3">
              <v-text-field
                v-model="lastname"
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
                v-model="lastname"
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
                v-model="lastname"
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
                v-model="lastname"
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
                v-model="lastname"
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
                v-model="lastname"
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
                v-model="lastname"
                :rules="nameRules"
                outlined
                dense
                label="Present History"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2" class="py-0 px-3">
              <v-text-field
                v-model="lastname"
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
                v-model="lastname"
                :rules="nameRules"
                outlined
                dense
                label="Present History"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2" class="py-0 px-3">
              <v-text-field
                v-model="lastname"
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
                v-model="lastname"
                :rules="nameRules"
                outlined
                dense
                label="Present History"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2" class="py-0 px-3">
              <v-text-field
                v-model="lastname"
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
                v-model="ex4"
                label="Diabetes"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="Hyper tension"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>

              <v-checkbox
                v-model="ex4"
                label="CVA"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>

              <v-checkbox
                v-model="ex4"
                label="CAD"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>

              <v-textarea
                class="py-3 my-3"
                autocomplete="email"
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
                autocomplete="email"
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
                v-model="ex4"
                label="Current Smoker"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="Ex Smoker"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>

              <v-checkbox
                v-model="ex4"
                label="Alcoholic"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>

              <v-text-field
                class="py-3 my-3"
                autocomplete="email"
                label="Sleep"
                outlined
                dense
              />

              <v-text-field
                class="py-3 my-3"
                autocomplete="email"
                label="Bowel/Bladder history"
                outlined
                dense
              />

              <v-textarea
                class="py-3 my-3"
                autocomplete="email"
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
                autocomplete="email"
                label="Other Remarks"
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-bottom-navigation v-model="value" fixed>
        <v-spacer></v-spacer>

        <v-btn value="recent" to="vitals">
          <h3>Save</h3>
        </v-btn>
        <v-btn value="recent" to="vitals">
          <h3>Next</h3>
        </v-btn>
      </v-bottom-navigation>
    </template>
  </div>
</template>
