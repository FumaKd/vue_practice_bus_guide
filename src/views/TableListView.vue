<script setup>
import { inject } from "vue"

import AllHeader from "@/components/parts/AllHeader.vue"
import TableList from "@/components/parts/TableList.vue"
import LoadingComponent from "@/components/parts/LoadingComponent.vue"

const busInfo = inject("busInfo")
</script>

<template>
  <AllHeader/>
  <v-main>
    <TableList v-if="busInfo" :bus-info="busInfo"/>
    <LoadingComponent v-else/>
  </v-main>
</template>

<style scoped></style>
