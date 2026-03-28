<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    
    <Contents>
      <template v-slot:top>
        <Creamer v-if="showCreamer" />
      </template>

      <template v-slot:mid>
        <Syrup v-if="showSyrup" />
        <Base v-else-if="showCreamer" />
      </template>

      <template v-slot:bottom>
        <Base v-if="showSyrup" />
        <Base v-else-if="!showCreamer" />
      </template>
    </Contents>
  </Mug>
</template>


<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  showCreamer: boolean;
  showSyrup: boolean;
};
defineProps<Props>();


</script>
