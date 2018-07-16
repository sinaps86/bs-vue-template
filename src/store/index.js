import Vue from 'vue';
import Vuex from 'vuex';
import API from '../services/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "Hello Vuex",
    height: null
  },
  mutations: {
    setHeight(state, height) {
      state.height = height;
    }
  },
  actions: {

  }
});
