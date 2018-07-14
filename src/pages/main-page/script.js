export default {
  name: "main-page",
  data() {
    return {
      car: {
        width: 20, height: 20, x: 900, y: 488, hold: false
      },
      car_container: {
        width: 48, height: 48, x: 884, y: 472, hold: false
      },
      trafic_lights: [
        {x: 456, y: 397, width: 10, height: 20, radius: 70, state: "red"},
        {x: 510, y: 216, width: 10, height: 20, radius: 70, state: "red"},
        {x: 529, y: 202, width: 10, height: 20, radius: 70, state: "red"},
        {x: 753, y: 398, width: 10, height: 20, radius: 70, state: "red"},
        {x: 606, y: 399, width: 10, height: 20, radius: 70, state: "red"},
        {x: 637, y: 384, width: 10, height: 20, radius: 70, state: "red"},
        {x: 722, y: 498, width: 10, height: 20, radius: 70, state: "red"},
        {x: 807, y: 142, width: 10, height: 20, radius: 70, state: "red"},
        {x: 798, y: 380, width: 10, height: 20, radius: 70, state: "red"},
        {x: 776, y: 567, width: 10, height: 20, radius: 70, state: "red"},
        {x: 794, y: 565, width: 10, height: 20, radius: 70, state: "red"},
        {x: 808, y: 582, width: 10, height: 20, radius: 70, state: "red"},
        {x: 862, y: 23, width: 10, height: 20, radius: 70, state: "red"},
        {x: 888, y: 384, width: 10, height: 20, radius: 70, state: "red"},
        {x: 866, y: 517, width: 10, height: 20, radius: 70, state: "red"},
        {x: 573, y: 396, width: 10, height: 20, radius: 70, state: "red"},
        {x: 988, y: 387, width: 10, height: 20, radius: 70, state: "red"},
        {x: 988, y: 386, width: 10, height: 20, radius: 70, state: "red"},
        {x: 1003, y: 334, width: 10, height: 20, radius: 70, state: "red"},
        {x: 1076, y: 274, width: 10, height: 20, radius: 70, state: "red"},
        {x: 952, y: 606, width: 10, height: 20, radius: 70, state: "red"},
        {x: 974, y: 68, width: 10, height: 20, radius: 70, state: "red"},
        {x: 875, y: 62, width: 10, height: 20, radius: 70, state: "red"},
        {x: 1169, y: 351, width: 10, height: 20, radius: 70, state: "red"},
        {x: 1180, y: 258, width: 10, height: 20, radius: 70, state: "red"},
        {x: 1258, y: 269, width: 10, height: 20, radius: 70, state: "red"},
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
    },
    carHold() {
      this.car.hold = true;
    },
    carLeave() {
      this.car.hold = false;
    },
    carMove(evt) {
      if (this.car.hold) {
        let boundary = this.$refs.ref_map_container.getBoundingClientRect();
        let x = evt.x - boundary.left;
        let y = evt.y - boundary.top;

        this.car.x = x - (this.car_container.width / 2) + this.car.width;
        this.car.y = y - (this.car_container.height / 2) + this.car.height;

        this.checkLights();
      }
    },
    carContainerMove(evt) {
      if (this.car.hold) {
        let boundary = this.$refs.ref_map_container.getBoundingClientRect();
        let x = evt.x - boundary.left;
        let y = evt.y - boundary.top;

        this.car.x = x - (this.car.width / 2);
        this.car.y = y - (this.car.height / 2); ///


      }
    },
    checkLights() {
      this.trafic_lights.forEach(el => {
        //let hypot = Math.hypot((el.x - el.width/2) - (this.car.x - this.car.width/2), (el.y - el.height/2) - (this.car.y - this.car.height / 2));
        let hypot = Math.hypot((this.car.x - this.car.width/2) - (el.x - el.width/2), (this.car.y - this.car.height / 2) - (el.y - el.height/2));
        this.showConsole && console.log("Hypot", hypot);
        if (hypot < el.radius/2) {
          this.showConsole && console.log("Попали на светофор");
          el.state = "green";
        }
      })
    }
  }
}
