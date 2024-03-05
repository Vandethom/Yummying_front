<template>
  <div>
      <div ref="mapRef" id="map"></div>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import {point}                      from '@turf/helpers'
import distance                     from 'turf-distance'

export default {
    name: 'Map',
    
    setup() {
        const mapRef = ref(null)

        onMounted(() => {
          const tt          = window.tt
          const focus       = { lat: 48.89628843249088, lng: 2.220891567380876 }
          const from        = point([48.89628843249088, 2.220891567380876])
          const to          = point([48.74007173047738, 2.4261560538778206])

          console.log('This is quite a distance dear : ', distance(from, to), 'km')

          var map = tt.map({
              key      : import.meta.env.VITE_TOMTOM_KEY,
              container: mapRef.value,
              center   : focus,
              zoom     : 12
          })

        map.on("load", function () {
            const initialZoom = map.getZoom();

            map.addLayer({
                id: "overlay",
                type: "circle",
                source: {
                  type: "geojson",
                  data: {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [2.220891567380876, 48.89628843249088],
                    },
                  },
                },
                paint: {
                  "circle-color": "#add8e6",
                  "circle-opacity": 0.3,
                  "circle-radius": 500,  // Initial size in meters
                  "circle-stroke-color": "black",
                  "circle-stroke-width": 1,
                },
            })  ;

            map.on("zoom", function () {
                const currentZoom = map.getZoom();
                const radiusAtCurrentZoom = (500 * Math.pow(2, currentZoom - initialZoom));
                map.setPaintProperty("overlay", "circle-radius", radiusAtCurrentZoom);
            });
          });









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
          `<b> Au Yummying Bird         </b><br /> 
               59 rue imaginée              <br /> 
               92170 Nanterre-sur-Seine
          `
        )

        marker.setPopup(popup).togglePopup()

        map.addControl(new tt.FullscreenControl())
           .addControl(new tt.NavigationControl())
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