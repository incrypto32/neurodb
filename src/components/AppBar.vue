<template>
  <div>
    <v-app-bar app dark>
      <div v-if="!mobile()">
        <v-btn to="/" text>
          <span class="mr-2">Home</span>
        </v-btn>

        <v-btn to="/patients/all" text>
          <span class="mr-2">All Patients</span>
        </v-btn>

        <v-btn to="/patients/add" text>
          <span class="mr-2">Add Patient</span>
        </v-btn>
      </div>
      <v-app-bar-nav-icon
        v-else
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <h2 class="dark--text brand">Neuro<b> DB</b></h2>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/patients/all">
            <v-list-item-title>All Patients</v-list-item-title>
          </v-list-item>

          <v-list-item to="/patients/add">
            <v-list-item-title>Add Patient</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
  mobile(): boolean {
    return this.$vuetify.breakpoint.mdAndDown;
  }
  drawer = false;
  group = null;


}
</script>
<style>
.brand{
  font-weight: 300;
}
</style>