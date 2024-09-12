<script setup>
import { ref, onMounted } from 'vue';

import BusStop from './BusStop.vue';

const props = defineProps(["stopInfo"])
const imgWidth = ref() 

onMounted(() => {
  imgWidth.value = document.getElementsByTagName("img")[0].offsetWidth
})
</script>

<template>
  <v-sheet class="pa-4">
    <div>
      <img class="rounded-lg border-blue border-lg pa-0" src="../../assets/map.png"  alt="map">
      <BusStop v-if="imgWidth" v-for="stop in stopInfo" :stop-info="stop" :img-width="imgWidth"/>
    </div>
  </v-sheet>
</template>

<style scoped>
div {
    position: relative;
}
img {
    max-width: 500px;
    min-width: 320px;
    width: 100%;
}
</style>
