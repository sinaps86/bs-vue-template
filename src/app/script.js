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
  created() {
    this.calculateHeight();
    window.addEventListener("resize", this.calculateHeight);
    this.addFavicon();
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
    calculateHeight() {
      let height = window.innerHeight;
      this.$store.commit("setHeight", height);
    },
    addFavicon() {
      let header = document.head;
      let link = document.createElement("link");
      link.setAttribute("rel", "shortcut icon");
      link.setAttribute("href", require('../assets/images/favicon.ico'));
      link.setAttribute("type", "image/x-icon");
      header.appendChild(link);
    },
  }
}
