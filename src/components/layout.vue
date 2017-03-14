<template>
  <div class="layout">
    <div class="panel-menu-wrapper">
      <panel-menu :kek=kek />
    </div>
    <div class="panel-move-wrapper">
    </div>
    <div class="panel-system-wrapper">
    </div>
  </div>
</template>

<script>
  import PanelMenu from './panelmenu';

  export default {
    name: 'layout',
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
      PanelMenu,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    display: flex;
  }
  .panel-menu-wrapper {
  }
</style>
