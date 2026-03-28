<template>
  <div
    class="creamer"
    :style="{ backgroundColor: beverageStore.currentCreamer.color }"
  ></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style scoped>
.creamer {
  position: relative;
  width: 100%;
  height: 20%;
  z-index: 200;
  animation: pour-tea 2s 0.5s forwards;
}
</style>