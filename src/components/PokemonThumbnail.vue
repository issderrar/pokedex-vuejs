<template>
  <div class="border border-black m-2 rounded-lg shadow-xl bg-gray-100">
    <button @click="removePokemon"
            class="text-right -mr-1 flex p-2 rounded-md bg-gray-200 hover:bg-gray-400  sm:-mr-2">
      <svg class="h-3 w-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div class="px-2 py-2 ">
      <div class="flex justify-center">
        <img class="w-auto xl:h-20 md:h-12 sm:h-8 h-8 " :src="require(`@/assets/sprites/${pokemon.name}.gif`)" alt="">
      </div>
      <div class=" text-center mt-2">
      <span class="xl:text-base md:text-sm sm:text-xs text-xs font-semibold ">
        {{ pokemon.name }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonThumbnail",
  props: {
    pokemon: Object,
  },
  methods: {
    removePokemon() {
      this.$emit('remove-pokemon')
    },
  },
  computed: {
    types() {
      if (this.pokemon.type2) {
        return [this.pokemon.type1.toUpperCase(), this.pokemon.type2.toUpperCase()]
      } else {
        return [this.pokemon.type1.toUpperCase()]
      }
    }
  }
}
</script>

<style scoped>

</style>
