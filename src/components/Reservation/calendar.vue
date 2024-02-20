<template>
    <div>
        <DateModePicker v-model="mode" />
        <VDatePicker class="my-calendar" 
                     expanded 
                     :mode="mode" 
                     :rules="rules" 
                     v-model="pickedDate"
                     @click="checkUserSelection()"/>
    </div>
  </template>

<script>
import { ref } from 'vue';

export default {
    data () {
        return {
            pickedDate: new Date()
        }
    },

    methods: {
        checkUserSelection() {
            console.log(this.pickedDate)
        }
    }
}

const mode = ref('dateTime');
const rules = ref([
  {
      hours:   { min: 8, max: 22 },
      minutes: { interval: 15 },
  },
  {
    hours: 23,
    minutes: 59,
    seconds: 59,
    milliseconds: 999,
  },
]);
</script>

<style lang="scss">
        button {
            background-color: rgb(238, 235, 235);
            color: black;
        }
    
    .vc-container .vc-weekday-1, .vc-container .vc-weekday-7 {
      color: #8791bd;
    }

    .my-calendar {
        background-color: white;
        color: black;
        margin: auto;
    }

</style>
