<template>
  <div class="h-screen">
  <selection-box :selection="$store.state.selection"
                 @reset-selection="selection = []"
  />
    <div class="p-4">
    <team-weakness-widget/>
    </div>
  </div>
</template>

<script>
import SelectionBox from "@/components/SelectionBox";
import TeamWeaknessWidget from "@/components/TeamWeaknessWidget";
export default {
name: "HomeView",
  components: {TeamWeaknessWidget, SelectionBox}
}
</script>

<style scoped>

</style>
