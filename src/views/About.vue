<template>
    <Map />
    <AboutInformations />
</template>

<script>
import AboutInformations from "../components/About/aboutInformations.vue"
import Map               from "../components/About/map.vue"

export default {
    name: 'MapView',

    components: {
        AboutInformations,
        Map
    }
}
</script>

<style lang="scss" scoped>
    #main {
      width: 100%;
    }

    .orderContainer {
      display: flex;
      justify-content: space-between;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
</style>
