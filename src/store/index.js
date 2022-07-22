import { createStore } from "vuex";
import modules from './modules/modules';
// import modules from './modules/modules';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules,
  plugins: [createPersistedState()],
});
