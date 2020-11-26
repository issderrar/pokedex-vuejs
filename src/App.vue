<template>
  <navbar/>
  <router-view></router-view>
</template>

<script>
document.title = "Pokemon Squad Tester"

import Navbar from "@/components/nav/Navbar";


export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #cbcbcb;
}
</style>
