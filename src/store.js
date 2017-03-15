import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint "no-param-reassign": [0] */

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(s) {
      const newCount = s.count + 1;
      s.count = newCount;
    },
  },
});

export default store;
