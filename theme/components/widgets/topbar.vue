<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to 亚米科技mall4j</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>致电我们: 123 - 456 - 7890
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown">
            <li class="mobile-wishlist">
              <nuxt-link :to="{ path: '/page/account/hlh_wishlist' }">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account">
              <i class="fa fa-user" aria-hidden="true"></i> 我的账户
              <ul class="onhover-show-div">
                <li>
                  <a v-if="isLogin" @click="logout"> 登录 </a>
                  <nuxt-link v-if="!isLogin" :to="{ path: '/page/account/login-firebase' }">登录</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/page/account/hlh_dashboard' }">我的帐户</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import UserAuth from '../../pages/page/account/auth/auth'
  export default {
    data() {
      return {
        isLogin: false
      }
    },
    created() {
      if (process.client) {
        this.isLogin = localStorage.getItem('userlogin')
      }
    },
    methods: {
      logout: function () {
        firebase.auth().signOut().then(() => {
          UserAuth.Logout()
          this.$router.replace('/page/account/login-firebase')
        })
      }
    }
  }
</script>