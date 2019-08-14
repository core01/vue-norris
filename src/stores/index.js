import Vue from 'vue';
import Vuex from 'vuex';
import jokes from './modules/jokes';
import error from './modules/error';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    jokes,
    error
  },
});
