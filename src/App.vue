<template>
  <div id="app">
    <router-view></router-view>
    <div class="preloader" v-if="show_preloader">

    </div>
    <b-modal
      ref="ref_m_app_info"
      :title="modals.info.title"
      ok-only
      ok-variant="info"
      header-bg-variant="info"
      header-text-variant="white"
    >
      <p>{{modals.info.message}}</p>
    </b-modal>
    <b-modal
      ref="ref_m_app_warning"
      :title="modals.warning.title"
      ok-only
      ok-variant="warning"
      header-bg-variant="warning"
      header-text-variant="white"
    >
      <p>{{modals.warning.message}}</p>
    </b-modal>
    <b-modal
      ref="ref_m_app_error"
      :title="modals.error.title"
      ok-only
      ok-variant="danger"
      header-bg-variant="danger"
      header-text-variant="white"
    >
      <p>{{modals.error.message}}</p>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        show_preloader: false,
        modals: {
          info: {show: false, title: "", message: ""},
          warning: {show: false, title: "", message: ""},
          error: {show: false, title: "", message: ""},
        }
      }
    },
    methods: {
      switchPreLoader(state) {
        this.show_preloader = state;
      },
      showAppModal(type, title, message) {
        this.modals[type].title = title;
        this.modals[type].message = message;
        this.$refs["ref_m_app_" + type].show();
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main-styles.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .preloader {

  }
</style>
