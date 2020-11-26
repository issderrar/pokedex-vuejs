<template class="font-serif">

  <div class="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
    <PokemonCard v-for="(pokemon, index) in pokemons" :key="index"
                 :style="{cursor: selectedCursor}"
                 :pokemon-data="pokemon"
                 :index="parseInt(('00' + (index +1)).slice(-3))"
                 @show-details="showDetails"
                 @mouseover="cardHover"
    ></PokemonCard>

    <pokemon-details v-show="showingDetails"
                     :pokemon="shownPokemon"
                     :index="shownIndex"
                     @hide-details="hideDetails"
    />
  </div>
</template>

<script>
import pokemons from '../../data/pokemons.json'
import PokemonCard from "@/components/PokemonCard";
import PokemonDetails from "@/components/PokemonDetails";

export default {
  name: "PokemonView",
  components: {
    PokemonDetails,
    PokemonCard
  },
  props: {
    generationSelected: String,
  },
  data() {
    return {
      pokemons: pokemons,
      selection: [],
      selectedCursor: "auto",
      showingDetails: false,
      shownPokemon: null,
      shownIndex: null,
    }
  },
  computed: {
    isFull() {
      return this.selection.length > 5
    }
  },
  methods: {
    handleClick() {
      this.showSelection = true
    },
    cardHover() {
      this.selectedCursor = "pointer"
    },
    showDetails(pokemon, index) {
      this.shownPokemon = pokemon
      this.shownIndex = index
      console.log(index)
      this.showingDetails = "true"
      document.documentElement.style.overflow = 'hidden'
    },
    hideDetails() {
      this.showingDetails = false
      document.documentElement.style.overflow = 'scroll'
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
