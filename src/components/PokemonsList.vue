<template>
  <div class="grid grid-cols-5">
    <PokemonCard v-for="(pokemon, index) in pokemons" :key="index" :pokemon-data="pokemon" @add-pokemon="addPokemon"
                 :isFull="!isFull"></PokemonCard>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard";
export default {
name: "PokemonsList",
  components: {PokemonCard}
}
</script>

<style scoped>

</style>
