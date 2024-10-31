<template>
  <button @click="addOne" type="">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.state.counter++;
      // this.$store.commit('increment');
      this.$store.commit('increase', { value: 2 });
    },
  },
};
</script>
