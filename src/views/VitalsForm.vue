<template>
  <v-container class="grey--text text--darken-2">
    <h2>Hemanth</h2>

    <v-row>
      <v-col cols="2">Sex : Male</v-col>
      <v-col cols="2">Age : 42</v-col>
      <v-col cols="2">Room : 101</v-col>
      <v-col cols="2">Date : 21/11/21</v-col>
    </v-row>

    <v-row>
      <v-col> <h3>Patient ID : #1453</h3></v-col>
    </v-row>

    <v-row class="my-2">
      <v-col> <h3>Vitals Examination</h3></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" class="">
        <v-text-field
          v-model="firstname"
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
          v-model="lastname"
          :rules="nameRules"
          outlined
          rounded
          dense
          label="Pulse Rate"
          suffix="/m"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          outlined
          rounded
          dense
          label="Respiration Rate"
          suffix="/m"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          outlined
          rounded
          dense
          label="Sp02"
          suffix="%"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastname"
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
          autocomplete="email"
          label="Memory"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Attention"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Speech"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
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
          autocomplete="email"
          label="Motor System"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Sensory System"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Cerebral Sign"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Meneningeal Sign"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Periferal Nerves"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

        <v-row>
      <v-col cols="12" md="6" class="py-0 px-3">
        <v-text-field
          autocomplete="email"
          label="Skull And Spine"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
  <v-bottom-navigation v-model="value" fixed app>
        <v-spacer></v-spacer>

        <v-btn value="recent">
          <h3>Save</h3>
        </v-btn>
        <v-btn value="recent">
          <h3>Next</h3>
        </v-btn>
      </v-bottom-navigation>
  </v-container>
</template>
