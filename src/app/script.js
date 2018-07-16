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
