<template>
  <ul class="menu-tree">
    <li class="menu-tree-root">
      <router-link to="/">
        <panel-root-button label="Домой" />
      </router-link>
    </li>
    <li class="menu-tree-root">
      <router-link to="/science">
        <panel-root-button label="Наука" v-on:click="kok" />
      </router-link>
      <science-submenu v-if="kek === 'ololo'" />
    </li>
    <li class="menu-tree-root">
      <router-link to="/mothership">
        <panel-root-button label="Флагманский корабль" />
      </router-link>
    </li>
  </ul>
</template>

<script>
  import PanelRootButton from './pannelrootbutton';
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
      PanelRootButton,
      ScienceSubmenu,
    },
    methods: {
      kok() {
        window.console.log('LOLOL');
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-tree {
    list-style: none;
    text-align: left;
  }
</style>
