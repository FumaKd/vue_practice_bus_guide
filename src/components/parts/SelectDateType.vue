<script setup>
import { ref, watch } from "vue"
const valueAndLabelMap = {
  "平日": "wkd",
  "土曜": "std",
  "休日": "snd"
}
const props = defineProps(["typeOfTable"])
const emits = defineEmits(["changeDayType"])
const typeOfDate = ref()
for (let label in valueAndLabelMap) {
  if (valueAndLabelMap[label] == props.typeOfTable) {
    typeOfDate.value = label
    break
  }
}

const itemData = ref(["平日", "土曜", "休日"])
watch(typeOfDate, () => {
  emits("changeDayType", valueAndLabelMap[typeOfDate.value])
})
</script>

<template>
  <v-select :items="itemData" label="表示タイプ" v-model="typeOfDate" class="w-50">
  </v-select>
</template>

<style></style>
