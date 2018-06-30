import Vue from 'vue'
import Router from 'vue-router'
import NewPage from '@/pages/new-page/new-page.vue'
import MainPage from '@/pages/main-page/main-page.vue'
import LoginPage from '@/pages/login-page/login-page.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/login-page',
      name: 'login-page',
      component: LoginPage
    }
  ]
})
