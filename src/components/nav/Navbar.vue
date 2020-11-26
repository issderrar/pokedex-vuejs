<template>
  <nav class="bg-gray-800 sticky top-0 w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-white">Pokedex</span>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/"
                           class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Home
              </router-link>
              <router-link to="/team-creation"
                           class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Créer mon équipe
              </router-link>
            </div>
          </div>
        </div>
        <div class="ml-3 relative">
          <div>
            <button
                class="bg-gray-800 flex text-sm rounded-full"
                id="user-menu" aria-haspopup="true"
                @click="toggleDropdown()"
            >
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full"
                   src="https://64.media.tumblr.com/30dacbd112d6e3281a9f296ed51779aa/1cf1e1df4ada7a47-c8/s640x960/8f8ec1c93abd969e12b8cd87498f2b2a67dbea3d.png"
                   alt="">
            </button>
          </div>
          <div :class="{hidden : !isOpen}"
               class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
               role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <team-display></team-display>
          </div>
        </div>
      </div>
    </div>

    <div id="debug-bar" class="text-sm flex justify-around bg-purple-500">
      <span class="xl:text-white text-black">xl</span>
      <span class="lg:text-white text-black">lg</span>
      <span class="md:text-white text-black">md</span>
      <span class="sm:text-white text-black">sm</span>
      <span class="xs:text-white text-black">xs</span>
      <span class="text-white xs:text-black sm:text-black md:text-black lg:text-black xl:text-black">all</span>
    </div>
  </nav>
</template>

<script>
import TeamDisplay from "@/components/Dropdown/TeamDisplay";

export default {
  name: "Navbar",
  components: {TeamDisplay},
  computed: {
    isOpen() {
      return this.$store.state.openDropdown
    }
  },
  methods: {
    toggleDropdown() {
      if (this.isOpen === true) {
        this.$store.dispatch({
          type: 'closeDropdown'
        })
      } else {
        this.$store.dispatch({
          type: 'openDropdown'
        })

      }
    },
  }
}
</script>

<style scoped>
.router-link-exact-active {
  @apply text-white bg-gray-900
}

</style>
