<template>
    <Map />
</template>

<script>
import Map from "../components/Map/map.vue"

export default {
    name: 'MapView',

    components: {
        Map,
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
