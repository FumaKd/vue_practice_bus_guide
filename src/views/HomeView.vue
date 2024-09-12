<script setup>
import { inject } from "vue"

import AllHeader from "@/components/parts/AllHeader.vue"
import StopMap from "@/components/templates/StopMap.vue"
import Loading from "@/components/parts/Loading.vue"

const busInfo = inject("busInfo")
</script>

<template>
  <AllHeader/>
  <v-main>
    <StopMap v-if="busInfo" :bus-info="busInfo"/>
    <Loading v-else/>
  </v-main>
  
</template>
