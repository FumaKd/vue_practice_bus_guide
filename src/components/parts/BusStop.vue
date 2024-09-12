<script setup>
import StopInfo from "./StopInfo.vue";

const props = defineProps(["stopInfo", "imgWidth"])
const scale = props.imgWidth / 500
const styleObj = {
  'top': props.stopInfo.latitude * scale + 'px',
  'left': props.stopInfo.longitude * scale + 'px',
}
</script>

<template>
  <v-tooltip
    location="top center"
    origin="overlap"    
  >
    <template v-slot:activator="{ props }">
      <div id="pingIcon" :style="styleObj" v-bind="props">
        <img :id="stopInfo.bus_stop_id" src="../../assets/pin.svg" alt="test" :width="50 * scale">
      </div>
    </template>
    <StopInfo :stop-info="stopInfo"/>
  </v-tooltip >   
</template>

<style scoped>
#pingIcon {
    position: absolute;
}
</style>
