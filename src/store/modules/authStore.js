import apiUrl from "../../configs/apiUrl";
import service from '@/services/service'

export default {
   namespaced: true,
   state: {
      permissionList: null
   },
   actions: {
      async verifyAccount() {
         let url = apiUrl.VERIFY_USER_ACCOUNT;
         const result = await service.get(url);

         return result
      },
   },
   mutations: {
      permissionList(state, item) {
         state.permissionList = item;
      },
   },

   getters: {
      listPermission(state) {
         return state.permissionList
       },
   }
}