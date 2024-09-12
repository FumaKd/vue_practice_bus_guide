<script setup>
import { provide } from "vue"
import {  RouterView } from 'vue-router'

import { useGetData } from "./data"
import { useTimeDataUpdate } from "./time"

const busInfo = useGetData()
const {hours, minutes, seconds, years, month, date, day} = useTimeDataUpdate()
provide("busInfo", busInfo)
provide("timeInfo", {hours, minutes, seconds, years, month, date, day})
</script>

<template>
  <v-app>
    <RouterView/>
  </v-app>
</template>

<style></style>
