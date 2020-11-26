<template>
  <div class="border border-black m-1 px-1 py-2 rounded-lg shadow-xl bg-gray-100">
    <div class="flex justify-center" @click="$emit('show-details' , pokemon, index)">
      <img class="w-auto xl:h-48 lg:h-36 md:h-24 sm:h-24 xs:h-16  h-16" loading="lazy" :src="require(`@/assets/sprites/${pokemon.name}.gif`)" alt="">
    </div>
    <div class=" flex justify-between items-center ">
      <span class="xl:text-base md:text-xs lg:text-sm text-xs font-semibold">
       {{index}} {{ pokemon.name }}
      </span>
      <type-component :types="types"></type-component>
    </div>

    <div class="flex justify-center">
      <base-button text="Sélectionner" @click.prevent="addToSelection"
                   class="bg-blue-400"></base-button>
    </div>
  </div>
</template>

<script>
import TypeComponent from "@/components/TypeComponent";
import BaseButton from "@/components/BaseButton";

export default {
  name: "PokemonCard",
  components: {BaseButton, TypeComponent},
  props: {
    pokemonData: Object,
    isFull: Boolean,
    index: Number
  },
  data() {
    return {
      pokemon: this.pokemonData,
    }
  },
  computed: {
    types() {
      if (this.pokemonData.type2) {
        return [this.pokemonData.type1.toUpperCase(), this.pokemonData.type2.toUpperCase()]
      } else {
        return [this.pokemonData.type1.toUpperCase()]
      }
    },
    isDead() {
      return false
    }
  },
  methods: {
    addToSelection() {
      this.$store.dispatch({
        type: 'addToSelection',
        value: this.pokemon
      })
      this.$store.dispatch({
        type: 'openDropdown'
      })
    }
  }
}
</script>

<style scoped>

</style>
