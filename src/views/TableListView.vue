<script setup>
import { inject } from "vue"

import AllHeader from "@/components/parts/AllHeader.vue"
import TableList from "@/components/parts/TableList.vue"
import Loading from "@/components/parts/Loading.vue"

const busInfo = inject("busInfo")
</script>

<template>
  <AllHeader/>
  <v-main>
    <TableList v-if="busInfo" :bus-info="busInfo"/>
    <Loading v-else/>
  </v-main>
</template>

<style scoped></style>
