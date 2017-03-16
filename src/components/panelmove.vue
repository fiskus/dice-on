<template>
  <div>
    <move-microstep v-for="n in $store.state.count" :key="n" />
  </div>
</template>

<script>
  import MoveMicrostep from './movemicrostep';

  export default {
    name: 'panel-move',
    data() {
      return {
        list: [1, 2, 3, 4],
      };
    },
    components: {
      MoveMicrostep,
    },
  };
</script>

<style scoped>
</style>
