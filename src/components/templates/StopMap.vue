<script setup>
import { inject, defineProps } from "vue"

import SelectDateType from "../parts/SelectDateType.vue";
import MapComponent from "../parts/MapComponent.vue";
import StopList from "../parts/StopList.vue";

import { useSelectTypeOfDay } from "@/selectDay";
import { useGetTimeTableList } from "@/stopMap";
// バス発車時刻情報
const props = defineProps(["busInfo"])
// 時間情報
const {hours, minutes, day} = inject("timeInfo")
const typeOfTable = useSelectTypeOfDay(day.value, hours.value)
const {stopInfo} = useGetTimeTableList(typeOfTable, props.busInfo, hours, minutes)
</script>

<template>
  <v-container>
    <SelectDateType
      :type-of-table="typeOfTable"
      @change-day-type="typeOfTable = $event"
    />
  </v-container>
  <v-container class="pa-0">
    <v-row class="w-100">
      <v-col class="v-col-6">
        <MapComponent :stop-info="stopInfo" />
      </v-col>
      <v-col class="">
        <StopList :stop-info="stopInfo"/>
      </v-col>
    </v-row>   
  </v-container>
</template>

<style scoped></style>
