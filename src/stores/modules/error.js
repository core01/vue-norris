const namespaced = true;

const state = {
  message: '',
};

const getters = {
  error: () => state.message,
};

const mutations = {
  setError (state, value) {
    state.error = value;
  },
};

const actions = {};

export default { namespaced, state, getters, mutations, actions };
