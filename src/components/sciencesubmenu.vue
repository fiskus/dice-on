<template>
  <ul class="menu-tree">
    <li class="menu-tree-root">
      <panel-button label="Транспортный робот" v-on:click="click" />
    </li>
    <li class="menu-tree-root">
      <panel-button label="Робот-шахтёр" v-on:click="click" />
    </li>
  </ul>
</template>

<script>
  import PanelButton from './pannelbutton';

  export default {
    name: 'science-submenu',
    components: {
      PanelButton,
    },
    methods: {
      click(label) {
        this.$store.commit('increment');
      },
    },
  };
</script>
