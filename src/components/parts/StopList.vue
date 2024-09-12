<script setup>
import { defineProps } from "vue"
import { useRouter } from 'vue-router';

defineProps(["stopInfo"])
const router = useRouter()
function pressedBtn(timeTableId) {
  router.push({
    name: 'tablesDetail',
    params: {
      timeTableId: timeTableId
    }
  })
}
</script>

<template>
  <v-container class="pa-4">
    <v-row class="d-flex">
      <v-col v-for="stop in stopInfo" :key="stop.bus_stop_id" class="v-col-12">
        <v-card 
          color="blue"
          elevation="8"
          class=""
        >
          <v-card-title class="ma-1 text-h5 font-weight-bold">
            {{ stop.bus_stop_name }}
          </v-card-title>
          <v-card-item>
            <div>
              <div label class="text-h6 ma-1">
                {{ stop.nextRoute }}
              </div>
            </div>
            <div class=" ma-1 text-h6">
              <span class="text-h4 font-weight-bold">{{ stop.nextTime }}</span> 発
            </div>
          </v-card-item>
          <v-card-actions class="ma-1">
            <v-btn
              variant="outlined"
              rounded="LG"
              elevation="2"
              size="x-large"
              @click="pressedBtn(stop.bus_stop_id)"
            >
              時刻表へ
            </v-btn> 
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
