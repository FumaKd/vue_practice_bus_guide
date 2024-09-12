<script setup>
import { defineProps } from "vue"

defineProps(["stopInfo"])
</script>

<template>
  <v-card>
    <v-card-title class="text-h5 font-weight-bold">
      {{ stopInfo.bus_stop_name }}
    </v-card-title>
    <v-card-item>
      <div>
        <div label class="text-h6 ma-1">
          {{ stopInfo.nextRoute }}
        </div>
      </div>
      <div class=" ma-1 text-h6">
        <span class="text-h4 font-weight-bold">{{ stopInfo.nextTime }}</span> 発
      </div>
    </v-card-item>
  </v-card>
</template>

<style scoped></style>
