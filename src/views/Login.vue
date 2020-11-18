<template>
  <v-container
    fluid
    flex-column
    flex-grow-1
    d-flex
    justify-center
    align-center
    class="bg"
  >
    <v-card class="pa-5">
      <v-card-title primary-title class="justify-center title">
        <span> Neuro<b> DB </b></span>
      </v-card-title>
      <v-form @submit.prevent="login">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            label="Email"
            placeholder="Enter your email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :rules="[() => !!password || 'This field is required']"
            name="password"
            label="Password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            type="submit"
            color="primary"
          >
            Login
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { fire } from "@/ts/firebase_helper";
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  email = "";
  password = "";
  show1 = true;
  loading = false;

  async login() {
    this.loading=true
    console.log(this.email, this.password);

    const error = await fire.loginWithEmailAndPassword(
      this.email,
      this.password
    );

    if (error) {
      console.log(error);
    }
    this.loading=false
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background: rgb(92, 113, 208);
  background: linear-gradient(
    90deg,
    rgba(92, 113, 208, 1) 5%,
    rgba(11, 91, 179, 1) 49%,
    rgba(22, 115, 138, 1) 100%
  );
  height: 100vh;
}
.title {
  font-weight: 300;
}
</style>
