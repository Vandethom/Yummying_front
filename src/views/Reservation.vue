<template>
    <div class="reservation">
        <Calendar />
        <ReservationPanel />
    </div>
</template>

<script lang="ts">
    import Calendar         from "../components/Reservation/calendar.vue"
    import ReservationPanel from "../components/Reservation/reservationPanel.vue"

    export default {
        name: 'Reservation',

        components: {
            Calendar,
            ReservationPanel
        }
    }
</script>

<style lang="scss" scoped>
    .reservation {
        display: grid;
        grid-template-columns: repeat(2, auto);
        margin: 35px;
    }
</style>
