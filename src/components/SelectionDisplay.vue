<template>
    <div class="grid grid-cols-6">
      <pokemon-thumbnail v-for="(pokemon,index) in selection" :key="index" :pokemon="pokemon"
      @remove-pokemon="removePokemon(index)"
      />
    </div>
</template>

<script>
import PokemonThumbnail from "@/components/PokemonThumbnail";

export default {
  name: "SelectionDisplay",
  components: {PokemonThumbnail},
  props: {
    selection : Array,
  },
  methods: {
    removePokemon(index) {
      this.$store.dispatch({
        type: 'removeFromSelection',
        value: index
      })
    }
  },
  computed : {
  }
}
</script>

<style scoped>

</style>
