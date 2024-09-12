<script setup>
import { inject, computed, defineProps } from "vue"

import AllHeader from "@/components/parts/AllHeader.vue"
import RouteInfo from "@/components/parts/RouteInfo.vue"
import TimeTable from "@/components/templates/TimeTable.vue"
import LoadingComponent from "@/components/parts/LoadingComponent.vue"

const props = defineProps(["timeTableId"])
const busInfo = inject("busInfo")

const busRouteInfo = computed(() => {
  if (busInfo.value) {
    return busInfo.value["時刻表情報"].filter((item) => item.time_table_id === Number(props.timeTableId))[0]
  } else {
    return ""
  }
})
</script>

<template>
  <AllHeader/>
  <v-main>
    <RouteInfo v-if="busInfo" :bus-route-info="busRouteInfo"></RouteInfo>
    <TimeTable v-if="busInfo" :bus-info="busInfo" :time-table-id="timeTableId"/>
    <LoadingComponent v-else/>
  </v-main>
</template>
<style scoped></style>
