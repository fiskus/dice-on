<template>
  <div class="button" v-on:click="click">{{ label }}</div>
</template>

<script>
  export default {
    name: 'panel-root-button',
    props: {
      label: {
        type: String,
      },
    },
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style scoped>
  .button {
    border: 1px solid #900;
  }
</style>
