import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],

    currentName: "",

    beverages: [] as {
      name: string;
      temp: string;
      base: (typeof bases)[0];
      creamer: (typeof creamers)[0];
      syrup: (typeof syrups)[0];
    }[],

  }),

actions: {
    makeBeverage() {
      if (this.currentName.trim() === "") return;

      this.beverages.push({
        name: this.currentName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      });

      this.currentName = "";
    },

    showBeverage(beverage: {
      name: string;
      temp: string;
      base: (typeof bases)[0];
      creamer: (typeof creamers)[0];
      syrup: (typeof syrups)[0];
    }) {
      this.currentName = beverage.name;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },

  persist: true,
});