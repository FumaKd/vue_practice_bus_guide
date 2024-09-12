<script setup>
import { computed, defineProps } from "vue"

const props = defineProps(["busInfo"])
const busTables = computed(() => props.busInfo["時刻表情報"])
const busStops = computed(() => {
  return props.busInfo["バス停情報"]
})
</script>

<template>
  <v-container>
    <v-chip size="x-large" color="blue" label class="ma-2">
      時刻表一覧
    </v-chip>
    <div>
      <v-card v-for="busTable in busTables"
        :key="busTable.time_table_id"
        class="ma-2"
        color="blue"
        elevation="8"
      >
        <v-card-title class="text-h5 font-weight-bold">
          {{ busTable.route_name }}系統 {{ busTable.destination }}
        </v-card-title>
        <v-card-subtitle>
          @ {{ busStops.filter((i) => i.bus_stop_id === busTable.bus_stop_id)[0].bus_stop_name }}
        </v-card-subtitle>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-btn
            variant="outlined"
            size="x-large"
            @click="$router.push({name:'tablesDetail', params:{timeTableId: busTable.time_table_id}})"
          >
            時刻表へ
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped></style>