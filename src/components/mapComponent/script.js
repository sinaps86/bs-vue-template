import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGo4Y3QpOgaYLO8Yu_n0zyuzteN12rs1c',
    libraries: 'places',
  },

});

export default {
  name: "new-component",
  props: {
  },
  components:{

  },
  data() {
    return {
      red: require('../../assets/red-icon.svg'),
      orange: require('../../assets/orange-icon.svg'),
      yellow: require('../../assets/yellow-icon.svg'),
      defaultIconSettings: {},
      markers: [
        {
          position: {lat: 53.7557000, lng: 87.1099000},
          markerStatus: 1,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.7556000, lng: 87.2099000},
          markerStatus: 2,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.857000, lng: 86.1099000},
          markerStatus: 3,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.7557002, lng: 87.1099002},
          markerStatus: 1,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.7556002, lng: 87.2099002},
          markerStatus: 2,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.857002, lng: 86.1099002},
          markerStatus: 3,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.7557004, lng: 87.1099004},
          markerStatus: 1,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.7556004, lng: 87.2099004},
          markerStatus: 2,
          title: 'Hello World!',
        },
        {
          position: {lat: 53.857004, lng: 86.1099004},
          markerStatus: 3,
          title: 'Hello World!',
        },
      ]
    }
  },
  created() {

  },

  mounted () {

  },

  computed:{
    getMapSize(){
      let mapHeight = window.innerHeight;
      let mapWidth = window.innerWidth;
      let mSize = {
        mHeight: mapHeight,
        mapWidth: mapWidth
      };
      return mSize
    }
  }
  ,

  methods: {

  }
}
