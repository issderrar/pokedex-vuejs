<template>
  <button  class="rounded-md text-lg text-white p-1 mt-2">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    disabled: Boolean,
    isFull: Boolean
  }
}
</script>

<style scoped>

</style>
