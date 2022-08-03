import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { pinia } from './store'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app");
