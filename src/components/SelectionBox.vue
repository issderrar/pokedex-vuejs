<template>
  <div class="flex justify-center ">
  <div class="bg-white rounded-2xl w-1/2 p-3">
    <h1 class="text-4xl text-center">Votre équipe ({{ selection.length }})</h1>
      <selection-display
          :selection="selection"
          v-show="showSelection"
          @close-selection="hideTeam"
      />
    <div class="text-center">
      <base-button
          class="mr-3 text-2xl bg-red-400"
          text="Effacer"
          @click="clearSelection"
      />

      <base-button
          text="Consulter"
          v-if="!showSelection"
          @click="showTeam"
          class="text-2xl bg-blue-400"
      />
      <base-button
          text="Cacher"
          v-else
          @click="hideTeam"
          class="text-2xl bg-blue-400"
      />
    </div>
  </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import SelectionDisplay from "@/components/SelectionDisplay";

export default {
  name: "SelectionBox",
  components: {SelectionDisplay, BaseButton},
  props: {
    isFull: Boolean,
  },
  data() {
    return {
      showSelection: true,
    }
  },
  computed: {
    team() {
      return this.selection
    },
    selection() {
      return this.$store.state.selection
    }
  },
  methods: {
    clearSelection() {
      this.$store.dispatch({
        type: 'clearSelection',
      })
    },
    showTeam() {
      this.showSelection = true
    },
    hideTeam() {
      this.showSelection = false
    }
  }
}
</script>

<style scoped>

</style>
