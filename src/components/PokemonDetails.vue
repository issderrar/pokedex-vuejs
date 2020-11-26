<template>
  <!-- Fond noir -->
  <div class=" bg-black fixed  inset-0 bg-opacity-50 flex justify-center items-center">
    <div v-if="pokemon" class=" border border-black m-2 px-4 py-2 rounded-lg shadow-xl bg-gray-100 w-1/4 ">
      <div class="flex justify-between">
      <button @click="$emit('hide-details')"
              class="-mr-1 flex p-2 rounded-md hover:bg-indigo-800 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

        <div class="bg-red-500 flex justify-center">
          <img :src="require('@/assets/icons/pokeball.svg')" class="w-6 " alt="">
      <span class="text-lg font-semibold text-white px-2 ">
        {{ index }} {{ pokemon.name }}
      </span>
        </div>

      </div>

      <div class="flex justify-center">
        <img class="w-auto h-72" :src="require(`@/assets/sprites/${pokemon.name}.gif`)" alt="">
      </div>
      <div class=" flex justify-end ">
        <type-component :types="types"></type-component>
      </div>

      <div class="flex justify-end my-2">
        <div class="border border-black rounded px-4 w-2/5">
          <div class="flex justify-between"><span>Height : </span><span>{{ pokemon.height }} m</span></div>
          <hr>
          <div class="flex justify-between"><span>Weight : </span><span>{{ pokemon.weight }} kg</span></div>
        </div>
      </div>

      <div class="border border-red-500 rounded-xl px-3 bg-red-500">
        <div class="bg-white py-2 px-1">{{ pokemon.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeComponent from "@/components/TypeComponent";

export default {
  name: "PokemonDetails",
  components: {TypeComponent},
  props: {
    pokemon: Object,
    index : Number,
  },
  computed: {
    types() {
      if (this.pokemon.type2) {
        return [this.pokemon.type1.toUpperCase(), this.pokemon.type2.toUpperCase()]
      } else {
        return [this.pokemon.type1.toUpperCase()]
      }
    },
  }
}
</script>

<style scoped>

</style>
