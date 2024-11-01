<template>
  <!-- <button @click="addOne" type="">Add 2</button> -->
  <!-- <button @click="increment" type="">Add 2</button>
  <button @click="increase({ value: 5 })" type="">Add 5</button> -->

  <button @click="incrementMethod" type="">Add 2</button>
  <button @click="increaseMethod({ value: 5 })" type="">Add 5</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   // this.$store.commit('increase');
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']), // using default names
    ...mapActions({
      incrementMethod: 'increment',
      increaseMethod: 'increase',
    }),
  },
};
</script>
