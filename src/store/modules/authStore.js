import apiUrl from "../../configs/apiUrl";
import service from '@/services/service'
import { defineStore } from 'pinia'
import router from "@/router";

export const authStore = defineStore({
   namespaced: true,
   id: 'auth',
   state: () => ({
      permissionList: [],
      token: null,
      user: null
    }),
   actions: {
      async verifyAccount() {
         let url = apiUrl.VERIFY_USER_ACCOUNT;
         const result = await service.getWithLoading(url);

         return result
      },
      async login(params) {
         let url = apiUrl.LOGIN;
         const result = await service.post(url, params);
         if (result.statusCode && result.statusCode === 200) {
            this.token = result.data.data.token;
            this.user = result.data.data.user;
         }
         return result
      },
      definePermissionList(item) {
         this.permissionList = item;
      },
      async logout() {
         this.token = null;
         router.push({ name: 'Login'})
      }
   },

   getters: {
      isLogin() {
         return this.token !== null
      },
   },
   persist: {
      storage: sessionStorage,
      paths: ['token'],
   },
})