<template>
<!--  <ul>
    <li><a href="#" @click.prevent="currentComponent = 'pokemon-view'">Tous les pokemons</a>
    </li>
    <li><a href="#" @click.prevent="currentComponent = 'parameters-view'">Paramètres</a>
    </li>
  </ul>-->
  <keep-alive>
    <component :is="currentComponent"
               v-bind="currentProps">
    </component>
  </keep-alive>
</template>

<script>
import PokemonView from "@/components/views/PokemonView";
import ParametersView from "@/components/views/ParametersView";

export default {
  name: "TeamView",
  components: {
    PokemonView,
    ParametersView,
  },
  data() {
    return {
      currentComponent: "pokemon-view",
      generationSelected: "Kanto"
    }
  },
  computed: {
    currentProps() {
      if (this.currentComponent === 'pokemon-view') {
        return {generationSelected: this.generationSelected}
      }
      return false
    }
  }
}
</script>

<style scoped>

</style>
