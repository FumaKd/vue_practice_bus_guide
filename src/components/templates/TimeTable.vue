<script setup>
import { ref, computed, watch, onMounted, inject } from "vue"

import SelectDateType from '../parts/SelectDateType.vue'

import { useSelectTypeOfDay } from "@/selectDay"
import { useGetNextBus } from "@/nextBus";

const props = defineProps(["busInfo", "timeTableId"])
const {day, hours, minutes} = inject("timeInfo")
const typeOfTable = useSelectTypeOfDay(day.value, hours.value)
const busTimeTable = computed(() => {
  return props.busInfo["発車時刻情報"].filter(
    (item) => item.time_table_id === Number(props.timeTableId) && item.weekday === typeOfTable.value
  )
})

const next = ref(useGetNextBus(busTimeTable.value, hours, minutes))
watch([busTimeTable, minutes], () => {
    next.value = useGetNextBus(busTimeTable.value, hours, minutes)
})
onMounted(() => {
    const scrollTarget = document.getElementById(next.value.departure_schedule_id)
    scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    })
})
</script>

<template>
  <v-container>
    <SelectDateType
      :type-of-table="typeOfTable"
      @change-day-type="typeOfTable = $event"
    />
  </v-container>
  <v-container>
    <v-list>
      <v-list-item v-for="row in busTimeTable"
        :key="row.departure_schedule_id"
        :id="row.departure_schedule_id"
        :title="row.departure_time"
      >
        <v-chip v-if="next === row" color="blue" variant="flat">NEXT</v-chip>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<style scoped></style>
