<template c>
  <div :class="{ 'opacity': isLoading }"></div>
  <div>
    <SideBar></SideBar>
  </div>
  <div :class="{ 'loader': isLoading }"></div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from './views/commons/SideBar.vue'
// import { useStore } from "vuex";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    SideBar
  },
  data() {
    return {
      isLoading: false
    }
  },
  async created() {
    this.next();
  } , 
  methods: {
    ...mapActions({
      verifyAccount: 'authStore/verifyAccount',
    }),
    next(){
      this.verifyAccount()
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
}

.opacity {
  position: absolute; 
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #f8f9fa;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
