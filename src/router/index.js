import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
    }, {
      path: '/science',
      name: 'science',
      component: Layout,
      props: {
        kek: 'ololo',
      },
    }, {
      path: '/mothership',
      name: 'mothership',
      component: Layout,
    },
  ],
});
