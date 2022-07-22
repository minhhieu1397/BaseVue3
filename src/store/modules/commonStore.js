const getDefaultState = () => {
  return {
    isCallingApi: false,
    error_code: null,
    error: null,
    isIE: false,
  }
};
const state = getDefaultState();

const mutations = {
  SET_IS_CALLING_API(state, payload) {
    state.isCallingApi = payload;
  },
  SET_ERROR_CODE(state, payload) {
    state.error_code = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
};

const actions = {};

export default {
  state, mutations, actions
};
