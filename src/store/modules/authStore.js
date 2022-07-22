import apiUrl from "../../configs/apiUrl";
import service from '@/services/service'

export default {
   namespaced: true,
   state: {},
   actions: {
      async verifyAccount() {
         let url = apiUrl.VERIFY_USER_ACCOUNT;
         const result = await service.get(url);

         return result
      },
   },
   mutations: {
   },

   getters: {
   }
}