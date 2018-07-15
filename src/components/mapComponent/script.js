import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'



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
      ]
    }
  },
  created() {
    this.getData();
    console.log(VueGoogleMaps)
  },

  mounted () {
    this.getMarkers()
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

    getMarkers() {
      axios.get('http://192.168.88.229:8000/api/area/micro_area/')
        .then(
          response => {
            console.log(response.data);
            for(let item in response.data){
              let titleOut = response.data[item].level === 3 ? "Огромная яма" : response.data[item].level === 2 ? "Большая яма" : response.data[item].level === 1 ? "Крупная яма" : "";
              this.markers.push({
                position: {lat: response.data[item].latitude_left, lng: response.data[item].longitude_left},
                markerStatus: response.data[item].level,
                title: titleOut,})
            }
          },
        )
        .catch((e)=>{

        })
    },

    openWindow1(m, index){
      m.opened = true;
      console.log(this.GmapInfoWindow)
    },

     getData(){
      let self = this;
     setInterval(
       this.getMarkers(), 5000
     )


}
  }
}
