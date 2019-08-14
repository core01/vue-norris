import { requestJoke } from '@/stores/services/jokes';

const namespaced = true;

const state = {
  joke: {},
  error: '',
};

const getters = {
  joke: () => state.joke,
  error: () => state.error,
};

const mutations = {
  setJoke (state, data) {
    state.joke = data;
  },
};

const actions = {
  async getJoke ({ commit }) {
    try {
      commit('error/setError', '', { root: true });
      let joke = await requestJoke();
      commit('setJoke', joke.data);
    } catch (error) {
      commit('error/setError', 'Упс, ошибочка вышла, попробуйте позже!');
      // @todo handle error
    }
  },
};

export default { namespaced, state, getters, mutations, actions };
