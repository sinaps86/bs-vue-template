<template>
  <div id="app">
    <router-view></router-view>
    <div class="preloader" v-if="show_preloader">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
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
      },
      mapInit(){
        AIzaSyBGo4Y3QpOgaYLO8Yu_n0zyuzteN12rs1c
      },
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #6f9fe6aa;
  }
  .spinner {
    margin: auto;
    width: 70px;
    height: 70px;
    position: relative;
    top: 45%;
    text-align: center;
    animation: sk-rotate 2.0s infinite linear;
  }
  .dot1,
  .dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #fff;
    border-radius: 100%;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }
  .dot2 {
    top: auto;
    bottom: 0;
    animation-delay: -1.0s;
  }
  .cursor {
    cursor: pointer;
  }
  @keyframes sk-rotate {
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg)
    }
  }
  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>
