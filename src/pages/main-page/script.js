import Timer from "../../services/timer"

export default {
  name: "main-page",
  data() {
    return {
      time: 0,
      global_timer: "",
      track_timer: "",
      track_time: "",
      speed_vector: 0,
      scale: 0.005564971,
      car: {
        width: 20, height: 20, x: 900, y: 488, hold: false, speed: 0
      },
      car_container: {
        width: 48, height: 48, x: 884, y: 472, hold: false
      },
      previous_x: null,
      previous_y: null,
      trafic_lights: [
        {x: 456, y: 397, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 510, y: 216, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 18000, yellow_interval: 2000, red_interval: 18000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 529, y: 202, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 18000, yellow_interval: 2000, red_interval: 18000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 753, y: 398, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 606, y: 399, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 637, y: 384, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 722, y: 498, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 807, y: 142, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 798, y: 380, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 776, y: 567, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 3000, yellow_interval: 500, red_interval: 4000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 794, y: 565, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 808, y: 582, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 862, y: 23, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 888, y: 384, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 10000, yellow_interval: 2000, red_interval: 10000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 866, y: 517, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 573, y: 396, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 988, y: 387, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 7000, yellow_interval: 1000, red_interval: 7000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 988, y: 386, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 10000, yellow_interval: 1000, red_interval: 10000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 1003, y: 334, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 7000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 1076, y: 274, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 952, y: 606, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 974, y: 68, width: 10, height: 20, radius: 70, state: "green",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 875, y: 62, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 1169, y: 351, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 9000, yellow_interval: 2000, red_interval: 9000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 1180, y: 258, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
        {x: 1258, y: 269, width: 10, height: 20, radius: 70, state: "red",
          green_interval: 2000, yellow_interval: 500, red_interval: 5000,
          red_timer: "", yellow_timer: "", green_timer: ""},
      ],
    }
  },
  created() {
    let self = this;
    this.showConsole && console.log("Созадил страниц main");
    this.global_timer = setInterval(self.globalTick, 100);
  },
  mounted() {
    this.initialLights();
  },
  methods: {
    initialLights() {
      let self = this;
      this.trafic_lights.forEach(el => {
        switch (el.state) {
          case "red":
            el.red_timer = setTimeout(self.changeLight, el.red_interval, el, "red");
            break;
          case "yellow":
            el.red_timer = setTimeout(self.changeLight, el.yellow_interval, el, "yellow");
            break;
          case "green":
            el.red_timer = setTimeout(self.changeLight, el.green_interval, el, "green");
            break;
        }

        //el.yellow_timer = setTimeout(self.changeLight, el.yellow_interval, el, "yellow");
        //el.green_timer = setTimeout(self.changeLight, el.green_interval, el, "green");
      });
    },
    globalTick() {
      this.time += 0.1;
      this.car.hold && this.calculateSpeed();
    },

    calculateSpeed() {
      this.car.speed = this.speed_vector * this.scale / (this.track_time / 3600);
    },

    calcuateVector(cat_a, cat_b) {
      this.speed_vector += Math.hypot(cat_a, cat_b);
    },

    changeLight(light, state) {
      let self = this;
      //this.showConsole && console.log("Change light", light, state);
      switch(state) {
        case "red":
          light.state = "yellow";
          light.yellow_timer = setTimeout(self.changeLight, light.yellow_interval, light, "yellow");
          break;
        case "yellow":
          light.state = "green";
          light.green_timer = setTimeout(self.changeLight, light.green_interval, light, "green");
          break;
        case "green":
          light.state = "second_yellow";
          light.red_timer = setTimeout(self.changeLight, light.yellow_interval, light, "second_yellow");
          break;
        case "second_yellow":
          light.state = "red";
          light.green_timer = setTimeout(self.changeLight, light.green_interval, light, "red");
          break;
      }
    },
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
        case "second_yellow":
          return `url("${require("../../assets/images/traffic-light-yellow.svg")}")`;
      }
    },

    trackTiming() {
      this.track_time += 0.1;
    },

    carHold() {
      let self = this;
      this.car.hold = true;
      this.track_timer = setInterval(self.trackTiming, 100);
    },
    carLeave() {
      this.car.hold = false;
      this.car.speed = 0;
      this.speed_vector = 0;
      clearInterval(this.track_timer);
      this.track_time = 0;
    },
    carMove(evt) {
      if (this.car.hold) {

        let boundary = this.$refs.ref_map_container.getBoundingClientRect();
        let x = evt.x - boundary.left;
        let y = evt.y - boundary.top;

        this.car.x = x - (this.car_container.width / 2) + this.car.width;
        this.car.y = y - (this.car_container.height / 2) + this.car.height;
        if (this.previous_x && this.previous_y) {
          this.calculateAngle(x - this.previous_x, y - this.previous_y);
          this.calcuateVector(x - this.previous_x, y - this.previous_y);
        }
        this.previous_x = x;
        this.previous_y = y;

        this.checkLights();
      }
    },

    calculateAngle(cat_a, cat_b) {
      let angle_rad = Math.atan2(cat_a, cat_b);
      let angle_grad = angle_rad * 180 / Math.PI;
      //this.showConsole && console.log("Радиан", angle_rad);
      //this.showConsole && console.log("Градус", angle_grad);
      this.checkVector(angle_rad, 10)
    },

    checkVector(angle, length) {
      let delta_x = Math.cos(angle);
      let delta_y = Math.sin(angle)
    },

    checkLights() {
      let self = this;
      this.trafic_lights.forEach(el => {
        let hypot = Math.hypot((this.car.x - this.car.width/2) - (el.x - el.width/2), (this.car.y - this.car.height / 2) - (el.y - el.height/2));
        //this.showConsole && console.log("Hypot", hypot);
        if (hypot < el.radius/2) {
          this.showConsole && console.log("Попали на светофор");
          el.state = "green";
          clearTimeout(el.red_timer);
          clearTimeout(el.yellow_timer);
          clearTimeout(el.green_timer);
          el.green_timer = setTimeout(self.changeLight, 3000, el, "green");
        }
      })
    },
  }
}
