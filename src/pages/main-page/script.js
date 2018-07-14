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
    }
  }
}
