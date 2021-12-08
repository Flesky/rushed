import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    user: state => {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      if (user) {
        commit("SET_USER", user);
      } else {
        commit("SET_USER", null);
      }
    },
  },
  modules: {},
});
