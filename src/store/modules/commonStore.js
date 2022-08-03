import { defineStore } from 'pinia'

export const commonStore = defineStore({
  namespaced: true,
  id: 'common',
  state: () => ({
    isCallingApi: false,
    error_code: null,
    error: null,
  }),
  actions: {
    
  },

  getters: {
    getIsCallApi: (state) => state.isCallingApi
  },
})
