<template>
  <div class="grid grid-cols-2 p-2" v-if="selection.length !== 0">
    <pokemon-picture v-for="(pokemon,index) in selection" :key="index" :pokemon="pokemon"
                     @remove-pokemon="removePokemon(index)"
    />
  </div>
  <div v-else class="p-3 text-bold text-lg">
    <p>Vous n'avez pas encore d'équipe</p>
  </div>
</template>

<script>
import PokemonPicture from "@/components/Dropdown/PokemonPicture";

export default {
  name: "TeamDisplay",
  components: {PokemonPicture},
  computed: {
    selection() {
      return this.$store.state.selection
    },
  },
    methods: {
      removePokemon(index) {
        this.$store.dispatch({
          type: 'removeFromSelection',
          value: index
        })
      }
    },
}
</script>

<style scoped>

</style>
