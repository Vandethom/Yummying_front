<template>
    <div class="reservation">
        <Calendar />
        
    </div>
</template>

<script lang="ts">
    import Calendar from "../components/Reservation/calendar.vue"

    export default {
        name: 'Reservation',

        components: {
            Calendar,
        }
    }
</script>

<style lang="scss" scoped>
    .reservation {
        margin: 40px;
    }
</style>
