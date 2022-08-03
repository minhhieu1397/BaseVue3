import apiUrl from "../../configs/apiUrl";
import service from '@/services/service'
import { defineStore } from 'pinia'

export const authStore = defineStore({
   namespaced: true,
   id: 'auth',
   state: () => ({
      permissionList: [],
      token: ''
    }),
   actions: {
      async verifyAccount() {
         let url = apiUrl.VERIFY_USER_ACCOUNT;
         const result = await service.getWithLoading(url);

         return result
      },
      definePermissionList(item) {
         this.permissionList = item;
      },
      async logout() {
         this.permissionList = [];
         this.token = [];
         return {};
      },
   },

   getters: {
   },
   persist: {
      storage: sessionStorage,
      paths: ['token'],
   },
})