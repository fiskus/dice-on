<template>
  <div class="button" v-on:click="click">{{ label }}</div>
</template>

<script>
  export default {
    name: 'panel-button',
    props: {
      label: {
        type: String,
      },
    },
    methods: {
      click() {
        this.$emit('click', this.label);
      },
    },
  };
</script>

<style scoped>
  .button {
    border: 1px solid #090;
  }
</style>
