<template>
  <div class="flex ">
    <span v-for="(type,index) in computedTypes" :key="index" :class="type.toLowerCase()" class="p-1.5 rounded-xl font-extrabold ml-0.5">{{ type.toUpperCase() }}</span>
  </div>
</template>

<script>
export default {
  name: "TypeComponent",
  props: {
    types : Array,
  },
  computed: {
    computedTypes() {
      return this.types;
    }
  }
}
</script>

<style scoped>
span {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
}

.grass {
  background-color: green;
}

.bug {
  background-color: greenyellow;
}

.poison {
  background-color: purple;
}

.fire {
  background-color: firebrick;
}

.water {
  background-color: blue;
}

.flying {
  background-color: cornflowerblue;
}

.normal {
  background-color: lightgrey;
}

.electric {
  background-color: yellow;
}

.ground {
  background-color: saddlebrown;
}

.fighting {
  background-color: maroon;
}

.psychic {
  background-color: deeppink;
}
.rock {
  background-color: sandybrown;
}
.ghost {
  background-color: mediumslateblue;
}
.dragon {
  background-color: rebeccapurple;
}
.ice {
  background-color: lightskyblue;
}

.steel {
  background-color: lightsteelblue;
}

</style>
