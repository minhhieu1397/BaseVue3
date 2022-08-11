import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { pinia } from './store'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '625192209961-gsavpuv4s77p7pe4ff4hluqehm2p2brb.apps.googleusercontent.com'
})
app.use(router)
app.use(pinia)
app.mount('#app')
// createApp(App)
//   .use(router)
//   .use(pinia)
//   .mount("#app");
