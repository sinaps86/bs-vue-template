// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import store from './store'
import API from './services/api'
import config from '../config/prod.env'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.mixin(
  {
    data() {
      return {
        API: API,
      }
    },
    computed: {
      getResPrefix() {
        return config.RES_URL ? config.RES_URL : '';
      },
      showConsole() {
        return config.show_console;
      }
    },
    methods: {
      switchPreLoader(state) {
        let root = this.$root.$children[0];
        root && root.switchPreLoader(state);
      },
      showAppModal(type, title, message) {
        let root = this.$root.$children[0];
        root && root.showAppModal(type, title, message);
      },
      log(message, ...param) {
        this.showConsole && console.log(message, ...param)
      }
    }
  }
);

router.beforeEach((to, from, next) => {
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
