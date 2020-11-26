<template>
  <div class="border">
    <button @click="$emit('remove-pokemon')"
            class="text-right -mr-1 flex p-2 bg-red-300 hover:bg-red-800  sm:-mr-2">
      <svg class="h-1 w-1 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div class="flex justify-center ">
      <img class="h-16 m-2" :src="require(`@/assets/sprites/${pokemon.name}.gif`)" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemon: Object
  },
}
</script>

<style scoped>

</style>
