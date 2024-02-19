<template>
    <div class="month">
        <p @click="getPreviousMonth()"><</p>
        <h5>{{ monthString }}</h5>
        <p @click="getNextMonth()">></p>
    </div>
    <div class="calendar">
        <p v-for='day in days' :key="day" class="days">{{ day }}</p>
        <p class="day">1</p>
        <p class="day">2</p>
        <p class="day">3</p>
        <p class="day">4</p>
        <p class="day">5</p>
        <p class="day">6</p>
        <p class="day">7</p>
        <p class="day">8</p>
        <p class="day">9</p>
        <p class="day">10</p>
        <p class="day">11</p>
        <p class="day">12</p>
        <p class="day">13</p>
        <p class="day">14</p>
        <p class="day">15</p>
        <p class="day">16</p>
        <p class="day">17</p>
        <p class="day">18</p>
        <p class="day">19</p>
        <p class="day">20</p>
        <p class="day">21</p>
        <p class="day">22</p>
        <p class="day">23</p>
        <p class="day">24</p>
        <p class="day">25</p>
        <p class="day">26</p>
        <p class="day">27</p>
        <p class="day" v-if="this.monthString !== 'Février'">28</p>
        <p class="day" v-if="this.monthString !== 'Février'">29</p>
        <p class="day" v-if="this.monthString !== 'Février'">30</p>
        <p class="day" v-if="this.monthString !== 'Février'  
                          && this.monthString !== 'Avril' 
                          && this.monthString !== 'Juin' 
                          && this.monthString !== 'Avril' 
                          && this.monthString !== 'Septembre' 
                          && this.monthString !== 'Novembre'">31</p>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    
    data () {
        return {
            days:   [
                'Lundi',    'Mardi',  'Mercredi', 'Jeudi',
                'Vendredi', 'Samedi', 'Dimanche'
            ],

            months: [
                'Janvier',   'Février',  'Mars',     'Avril',
                'Mai',       'Juin',     'Juillet',  'Août',
                'Septembre', 'Octobre',  'Novembre', 'Décembre'
            ],

            monthNumber: null,
            monthString: null
        }
    },

    mounted () {
        this.getDate()
    },

    methods: {
        getDate() {
            const timeElapsed = Date.now()
            const dateNow     = new Date(timeElapsed)
            
            this.monthNumber = dateNow.getMonth()
            this.monthString = this.months[this.monthNumber]
        },

        getNextMonth() {
            if (this.monthNumber === 11) {
                this.monthNumber = 0
            } else {
                this.monthNumber += 1
            }

            this.monthString = this.months[this.monthNumber]
        },

        getPreviousMonth() {
            if (this.monthNumber === 0) {
                this.monthNumber = 11
            } else {
                this.monthNumber -= 1
            }
            
            this.monthString = this.months[this.monthNumber]
        }
    }
}
</script>

<style lang="scss">
    .month {
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        margin-bottom: 0;

        p {
            margin: 0 6px 4px 6px;
            cursor: pointer;
        }
    }
    .calendar {
        display: grid;
        background-color: grey;
        grid-template-columns: repeat(7, 1fr);
        gap: 30px;
        padding: 0 25px 0 25px;
        width: 700px;
        margin: auto;
        margin-top: 2%;
        text-align: center;

        .day {
            height: 50px;
            padding-top: 15px;
            margin-bottom: 12px;
            border: 1px solid rgba(211, 220, 50, .6)
        }
    }
</style>