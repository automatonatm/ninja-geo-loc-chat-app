<template>
  <div class="map">
    <div class="google-map" id="map">

    </div>

  </div>
    
</template>

<script>
  import  firebase from 'firebase'
    export default {
        name: "GMap",
      data() {
          return {
            lat: 53,
            long: -2

          }
      },
      methods: {


          renderMap() {
            const mapElem = document.getElementById('map')
            const  map = new google.maps.Map(mapElem, {
              center: {lat: this.lat, lng: this.long },
              zoom: 6,
              maxZoom: 15,
              mixZoom: 3,
              streetViewControl: false
            })
          }
      },
      computed: {
          user () {
            return this.$store.getters.user
          },

        loading() {
          return this.$store.getters.loading
        }

      },
      mounted() {
          //get user location
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.lat = position.coords.latitude
            this.long = position.coords.longitude
            this.renderMap()
          }, (err) => {
            console.log(err)
            this.renderMap()
          }, {maximumAge: 60000, timeout: 3000} )

        }else  {
          //position set by default
          this.renderMap()
        }

      }
    }
</script>

<style scoped>

  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff ;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

</style>
