<script setup>
import { defineProps } from "vue"

defineProps(["busRouteInfo"])
</script>

<template>
  <v-container>
    <v-card color="blue">
      <v-card-title class="text-h5 font-weight-bold">
        {{ busRouteInfo.route_name }}系統 {{ busRouteInfo.destination }}
      </v-card-title>
      <v-card-actions>
        <a target="_blank" :href="busRouteInfo.url" class="text-white pa-2" title="公式サイトへ">公式情報へ</a>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
