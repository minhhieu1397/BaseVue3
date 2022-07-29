<template>
  <div :class="{ 'opacity': isLoading }"></div>
    <div v-if="isLogin">
      <div class='dashboard' :class="{'dashboard-compact': isHideSideBar}">
      <SideBar
        :toggleSidebar="toggleSidebar"
        :isHideSideBar="isHideSideBar"
        :permissionList="permissionList"
      ></SideBar>
      <div class='dashboard-app'>
        <Header
          @toggle-sidebar="setValueToggleSidebar"
          :isHideSideBar="isHideSideBar"
        ></Header>
        <div class='dashboard-content'>
          <div class='container'>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <router-view />
  </div>
  <div :class="{ 'loader': isLoading }"></div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from './views/commons/SideBar.vue'
import Header from './views/commons/Header.vue'
// import { authStore } from "vuex";
import permission from '../json/permission.json'
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    SideBar,
    Header
  },
  data() {
    return {
      isLoading: false,
      toggleSidebar: '',
      isHideSideBar: false,
      isLogin: true,
      permissionList: permission
    }
  },
  async created() {
    this.$store.commit('authStore/permissionList', this.permissionList);
  } , 
  methods: {
    ...mapActions({
      verifyAccount: 'authStore/verifyAccount',
    }),
    setValueToggleSidebar(value) {
      this.toggleSidebar = value;
      this.isHideSideBar = !this.isHideSideBar;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  top: 40%;
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  z-index: 200;
}

.opacity {
  position: absolute; 
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 100;
  background-color: #f8f9fa;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
