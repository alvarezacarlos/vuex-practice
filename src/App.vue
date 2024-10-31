<template>
  <base-container title="Vuex">
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <!-- <h3>{{ counter }}</h3> -->
    <TheCounter />
    <button @click="addOne">Add 1</button>
    <ChangeCounter></ChangeCounter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      // this.$store.state.counter = this.$store.state.counter + 11;
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
