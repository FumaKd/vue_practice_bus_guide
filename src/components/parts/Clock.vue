<script setup>
import { inject, computed } from "vue"
const { hours, minutes, seconds } = inject("timeInfo")

const displayLabel = computed(() => {
  let hoursStr = hours.value < 10 ? "0" + String(hours.value) : String(hours.value)
  let minutesStr = minutes.value < 10 ? "0" + String(minutes.value) : String(minutes.value)
  let secondsStr = seconds.value < 10 ? "0" + String(seconds.value) : String(seconds.value)
  return `${ hoursStr }:${ minutesStr }:${ secondsStr }`
})
</script>

<template>
    <span class="font-weight-medium">{{ displayLabel }}</span>
</template>

<style scoped></style>
