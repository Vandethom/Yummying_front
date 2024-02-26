<template>
  <div>
      <div ref="mapRef" id="map"></div>
  </div>
</template>


<script>
import { onMounted, reactive, ref } from 'vue';
import distance from 'turf-distance'
import {point}    from '@turf/helpers'

export default {
    name: 'Map',
    
    setup() {
      const mapRef = ref(null)

      onMounted(() => {
        const tt          = window.tt
        const focus       = { lat: 48.89628843249088, lng: 2.220891567380876 }
        const destination = { lat: 48.74007173047738, lng: 2.4261560538778206 }
        const from        = point([48.89628843249088, 2.220891567380876])
        const to          = point([48.74007173047738, 2.4261560538778206])

        console.log('This is quite a distance dear : ', distance(from, to), 'km')

        var map = tt.map({
            key      : import.meta.env.VITE_TOMTOM_KEY,
            container: mapRef.value,
            center   : focus,
            zoom     : 15
        })

        var marker       = new tt.Marker().setLngLat(focus).addTo(map)
        var popupOffsets = {
            top: [0, 0],
            bottom: [0, -70],
            "bottom-right": [0, -70],
            "bottom-left": [0, -70],
            left: [25, -35],
            right: [-25, -35],
        }

        var popup = new tt.Popup({ offset: popupOffsets }).setHTML(
          "<b>Au Yummying Bird</b> <br /> 59 rue imaginée <br /> 92170 Nanterre-sur-Seine"
        )

        marker.setPopup(popup).togglePopup()

        map.addControl(new tt.FullscreenControl())
        map.addControl(new tt.NavigationControl())
      })

      return {
        mapRef
      }
    },    
}
</script>

<style lang="scss">
    #map {
      height: 60vh;
      width: 100%;

      .mapboxgl-popup-content{
        color: black;
      }

      button {
        color: black;  
      }
    }

    #marker {
      background-color: blue;
      background-size: cover;
      width: 50px;
      height: 70px;
}
</style>