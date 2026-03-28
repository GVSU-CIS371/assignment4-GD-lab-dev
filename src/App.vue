<template>
  <div>
    <Beverage
      :isIced="beverageStore.currentTemp === 'Cold'"
      :showCreamer="beverageStore.currentCreamer.id !== 'c1'"
      :showSyrup="beverageStore.currentSyrup.id !== 's1'"
    />

    <ul>
      <li>
        <strong>Temperature</strong>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`temp-${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <strong>Base</strong>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`base-${base.id}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>

      <li>
        <strong>Creamer</strong>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`creamer-${creamer.id}`"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>

      <li>
        <strong>Syrup</strong>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`syrup-${syrup.id}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>

    <input
      type="text"
      placeholder="Beverage Name"
      v-model="beverageStore.currentName"
    />
    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
  </div>

  <div id="beverage-container" style="margin-top: 20px">
    <div v-for="bev in beverageStore.beverages" :key="bev.name">
      <button @click="beverageStore.showBeverage(bev)">
        {{ bev.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 12px;
}

label {
  margin-right: 10px;
}

button {
  margin-top: 10px;
  margin-right: 8px;
}
</style>