<template>
    <Calendar />
</template>

<script lang="ts">
    import Calendar from "../components/Reservation/calendar.vue"

    export default {
        name: 'Reservation',

        components: {
            Calendar
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
