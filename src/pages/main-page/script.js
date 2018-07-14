export default {
  name: "main-page",
  data() {
    return {
      trafic_lights: [
        {x: 456, y: 397, radius: 50, state: "red"},
        {x: 510, y: 216, radius: 50, state: "red"},
        {x: 529, y: 202, radius: 50, state: "red"},
        {x: 753, y: 398, radius: 50, state: "red"},
        {x: 606, y: 399, radius: 50, state: "red"},
        {x: 637, y: 384, radius: 50, state: "red"},
        {x: 722, y: 498, radius: 50, state: "red"},
        {x: 807, y: 142, radius: 50, state: "red"},
        {x: 798, y: 380, radius: 50, state: "red"},
        {x: 776, y: 567, radius: 50, state: "red"},
        {x: 794, y: 565, radius: 50, state: "red"},
        {x: 808, y: 582, radius: 50, state: "red"},
        {x: 862, y: 23, radius: 50, state: "red"},
        {x: 888, y: 384, radius: 50, state: "red"},
        {x: 866, y: 517, radius: 50, state: "red"},
        {x: 573, y: 396, radius: 50, state: "red"},
        {x: 988, y: 387, radius: 50, state: "red"},
        {x: 988, y: 386, radius: 50, state: "red"},
        {x: 1003, y: 334, radius: 50, state: "red"},
        {x: 1076, y: 274, radius: 50, state: "red"},
        {x: 952, y: 606, radius: 50, state: "red"},
        {x: 974, y: 68, radius: 50, state: "red"},
        {x: 875, y: 62, radius: 50, state: "red"},
        {x: 1169, y: 351, radius: 50, state: "red"},
        {x: 1180, y: 258, radius: 50, state: "red"},
        {x: 1258, y: 269, radius: 50, state: "red"},
      ],
    }
  },
  created() {
    this.showConsole && console.log("Созадил страниц main")
  },
  mounted() {

  },
  methods: {
    mouseDown(evt) {
      let boundary = this.$refs.ref_map_container.getBoundingClientRect();
      let x = evt.x - boundary.left;
      let y = evt.y - boundary.top;
      console.log("X", x);
      console.log("Y", y);
    },
    getLightState(state) {
      switch(state) {
        case "red":
          return `url("${require("../../assets/images/traffic-light-red.svg")}")`;
        case "green":
          return `url("${require("../../assets/images/traffic-light-green.svg")}")`;
        case "yellow":
          return `url("${require("../../assets/images/traffic-light-yellow.svg")}")`;
      }
    }
  }
}
