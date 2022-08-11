<template>
  <div class="container-login">
    <div class="wrap-login row">
      <div class="login-pic js-tilt col-md-6 col-lg-6" data-tilt>
        <img src="@/assets/images/binggo.png" alt="">
      </div>
      <div class="validate-form col-md-12 col-lg-6">
        <span class="login100-form-title">Đăng nhập hệ thống</span>
        <div class="wrap-input100">
          <input type="text" v-model="user.email" class="input100 form-control" placeholder="Email">
          <span class="focus-input100"></span>
          <span class="symbol-input100">
            <i class="bi bi-envelope"></i>
          </span>
        </div>
        <div class="wrap-input100">
          <input type="password" v-model="user.password" class="input100 form-control" placeholder="Mật khẩu">
          <span class="focus-input100"></span>
          <span class="symbol-input100">
            <i class="bi bi-lock"></i>
          </span>
        </div>
        <div class="container-login100-form-btn">
          <button class="login100-form-btn" @click="login()">Đặng nhập</button>
        </div>
        <div class="text-center" style="padding-top: 136px">
          <a href="" class="txt2 mt-2">Create your Account</a>
        </div>
        <div>
          <!-- <GoogleLogin :callback="callback"> -->
          <button class="txt2" @click="loginGoogle">Login Using Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '@/store/modules/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { googleAuthCodeLogin } from "vue3-google-login"

export default {
  name: "LoginComponent",
  setup() {
    /* Define */
    const auth = authStore()
    auth.token = null

    const user = ref({ 
      email: '',
      password: ''
    })

    const router = useRouter()

    const callback = (response) => {
      console.log("Handle the response", response)
    }

    const loginGoogle = () => {
      googleAuthCodeLogin().then((response) => {
        console.log("Handle the response", response)
        const result = auth.loginGoogle(response)
        if (result.status == 200) {
          router.push({ name: 'Home'})
        }
      })
    }

    const login = async () => {
      const result = await auth.login(user.value)
      if (result.status == 200) {
        router.push({ name: 'Home'})
      }
    }
    return {
      user,
      login,
      callback,
      loginGoogle
    }
  }
};
</script>

<style scoped>
.container-login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f5f5f5 !important;
}

.login-pic {
  width: 316px;
  will-change: transform;
    transform: perspective(300px) rotateX(0deg) rotateY(0deg);
}

.login-pic img {
  max-width: 100%;
}

.login-pic img:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1); 
}

.wrap-input100 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.input100 {
  font-family: Poppins-Medium;
  font-size: 18px;
  line-height: 1.5;
  color: #666;
  display: block;
  width: 100%;
  background: #e8f0fe;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
}

.input100 + .symbol-input100 {
  color: red;
}

input {
  outline: none;
  border: none;
  font-family: Poppins-Medium;
}

.symbol-input100 {
  font-size: 18px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -moz-transition: all .4s;
  transition: all .4s;
}

textarea:focus, input:focus {
  border-color: transparent!important;
}

.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}

.login100-form-btn {
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #e02222;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -moz-transition: all .4s;
  transition: all .4s;
}

button {
  outline: none!important;
  border: none;
  background: 0 0;
}

.login100-form-btn:hover {
  background: #333;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 15px;
  line-height: 1.5;
  color: #666;
}

a:focus {
  outline: none!important;
}

a {
  text-decoration: none;
}

@media (max-width: 992px) {
  .wrap-login {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .login-pic {
    display: none !important;
  }

  .login100-form-title {
    margin-top: 50px;
    font-size: 24px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 54px;
  }
}

@media (min-width: 992px) {
  .wrap-login {
    width: 960px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 177px 130px 33px 95px;
  }

  .login100-form-title {
    font-size: 24px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 54px;
  }
}
</style>
