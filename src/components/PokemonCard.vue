<template>
  <div class="border border-black m-2 px-4 py-2 rounded-lg shadow-xl bg-gray-100">
    <div class="flex justify-center" @click="$emit('show-details' , pokemon, index)">
      <img class="w-auto h-48" loading="lazy" :src="require(`@/assets/sprites/${pokemon.name}.gif`)" alt="">
    </div>
    <div class=" flex justify-between ">
      <span class="text-lg font-semibold">
       {{index}} {{ pokemon.name }}
      </span>
      <type-component :types="types"></type-component>
    </div>
    <div class="flex justify-center">
      <base-button text="Sélectionner" :isFull="isFull" @click.prevent="addToSelection"
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
