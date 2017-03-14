<template>
  <ul class="menu-tree">
    <li class="menu-tree-root">
      <router-link to="/">Домой</router-link>
    </li>
    <li class="menu-tree-root">
      <router-link to="/science">Наука</router-link>
      <science-submenu v-if="kek === 'ololo'" />
    </li>
    <li class="menu-tree-root">
      <router-link to="/mothership">Флагманский корабль</router-link>
    </li>
  </ul>
</template>

<script>
  import ScienceSubmenu from './sciencesubmenu';

  export default {
    name: 'panel-menu',
    props: {
      kek: {
        type: String,
        default: 'irntr',
      },
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      ScienceSubmenu,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-tree {
    text-align: left;
  }
</style>
