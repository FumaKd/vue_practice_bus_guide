<script setup>
import { useRouter } from "vue-router"

import ClockComponent from "./ClockComponent.vue";
const routeName = useRouter().currentRoute.value.name


</script>

<template>
  <v-app-bar color="blue">
    <v-app-bar-title class="text-h5">
      バス情報サイト
    </v-app-bar-title>
    <template v-slot:append>
      <ClockComponent/>
    </template>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <template v-slot:extension>
      <v-spacer></v-spacer>
      <v-chip
        :disabled="routeName === 'home'"
        @click="$router.push({name: 'home'})"
        class="ma-1 text-button"
      >
        Home
      </v-chip>
      <v-chip
        :disabled="routeName === 'tables'"
        @click="$router.push({name: 'tables'})"
        class="ma-1 text-button"
      >
        Tables
      </v-chip>
      <v-spacer></v-spacer>
    </template>
  </v-app-bar>
</template>

<style></style>
