<template>
  <div class="border bg-white rounded p-3 xl:w-3/5  sm:w-full w-full">
    <h1 class="text-xl font-bold mb-4">Analyse de l'équipe</h1>

    <div class=" flex flex-wrap  p-1 mb-4 ">
      <div class="flex items-center" v-for="(number, type) in teamTypes" :key="type">
        <type-component :types="[type]"></type-component>
        <span class="p-1.5 font-semibold">x {{ number }}</span>
      </div>
    </div>


    <div class="md:flex">

      <div class="w-1/2">
        <h1 class="text-xl font-bold">Faible contre :</h1>
        <div class="flex">
          <type-component v-for="(type,index) in teamEffectiveness.weaknesses" :key="index"
                          :types="[type]"></type-component>
        </div>
      </div>


      <div class="w-1/2">
        <h1 class="text-xl font-bold">Fort contre :</h1>
        <div class="flex">
          <type-component v-for="(type,index) in teamEffectiveness.strengths" :key="index"
                          :types="[type]"></type-component>
        </div>


      </div>


    </div>
  </div>
</template>

<script>

import {typesService} from "@/services/typesService";
import TypeComponent from "@/components/TypeComponent";

export default {
  name: "TeamWeaknessWidget",
  components: {TypeComponent},
  props: {},
  computed: {
    team() {
      return this.$store.state.selection
    },
    teamTypes() {
      return typesService.getTeamNumberPerTypes(this.team)
    },
    teamEffectiveness() {
      return typesService.getTeamEffectiveness(this.team)

    }
  }
}
</script>

<style scoped>

</style>
