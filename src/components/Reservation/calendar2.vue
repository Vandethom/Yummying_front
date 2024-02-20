<template>
    <div>
        <div class="month">
            <p @click="getPreviousMonth()"><</p>
            <h5>{{ monthString }} {{ year }}</h5>
            <p @click="getNextMonth()">></p>
        </div>
        <div class="calendar">
            <p v-for='day in days' :key="day" class="days" :class="day">{{ day }}</p>
            <p class="day" id="day1" @click="selectDate()">1</p>
            <p class="day" id="day2" @click="selectDate()">2</p>
            <p class="day" id="day3" @click="selectDate()">3</p>
            <p class="day" id="day4" @click="selectDate()">4</p>
            <p class="day" id="day5" @click="selectDate()">5</p>
            <p class="day" id="day6" @click="selectDate()">6</p>
            <p class="day" id="day7" @click="selectDate()">7</p>
            <p class="day" id="day8" @click="selectDate()">8</p>
            <p class="day" id="day9" @click="selectDate()">9</p>
            <p class="day" id="day10" @click="selectDate()">10</p>
            <p class="day" id="day11" @click="selectDate()">11</p>
            <p class="day" id="day12" @click="selectDate()">12</p>
            <p class="day" id="day13" @click="selectDate()">13</p>
            <p class="day" id="day14" @click="selectDate()">14</p>
            <p class="day" id="day15" @click="selectDate()">15</p>
            <p class="day" id="day16" @click="selectDate()">16</p>
            <p class="day" id="day17" @click="selectDate()">17</p>
            <p class="day" id="day18" @click="selectDate()">18</p>
            <p class="day" id="day19" @click="selectDate()">19</p>
            <p class="day" id="day20" @click="selectDate()">20</p>
            <p class="day" id="day21" @click="selectDate()">21</p>
            <p class="day" id="day22" @click="selectDate()">22</p>
            <p class="day" id="day23" @click="selectDate()">23</p>
            <p class="day" id="day24" @click="selectDate()">24</p>
            <p class="day" id="day25" @click="selectDate()">25</p>
            <p class="day" id="day26" @click="selectDate()">26</p>
            <p class="day" id="day27" @click="selectDate()">27</p>
            <p class="day" id="day28" @click="selectDate()">28</p>
            <p class="day" id="day29" @click="selectDate()" v-bind:style="{ display: isDisplayed }">29</p>
            <p class="day" id="day30" @click="selectDate()" v-if="this.monthString !== 'Février'">30</p>
            <p class="day" id="day31" @click="selectDate()" v-if="this.monthString !== 'Février'  
                              && this.monthString !== 'Avril' 
                              && this.monthString !== 'Juin' 
                              && this.monthString !== 'Septembre' 
                              && this.monthString !== 'Novembre'">31</p>
        </div>
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

            monthNumber:        null,
            monthString:        null,
            year:               null,
            startingDayOfMonth: null,

            isLeapYear:  false,
            isDisplayed: 'block'
        }
    },

    mounted () {
        this.getDate()
        this.checkLeapYear()
        this.getStartOfMonth()
    },

    methods: {
        getDate() {
            const timeElapsed = Date.now()
            const dateNow     = new Date(timeElapsed)
            
            this.monthNumber = dateNow.getMonth()
            this.year        = dateNow.getYear() + 1900
            this.monthString = this.months[this.monthNumber]
        },

        checkLeapYear() {
            if (this.monthString == 'Février') {
            if (((this.year % 4 == 0) 
              && (this.year % 100 != 0)) 
              || (this.year % 400 == 0)) {
                this.isDisplayed = 'block'
            } else {
                this.isDisplayed = 'none'
            }

            }
        },

        getStartOfMonth() {
            this.startingDayOfMonth = new Date(this.year, this.monthNumber, 1)
        },

        getNextMonth() {
            if (this.monthNumber === 11) {
                this.monthNumber = 0
                this.year        += 1
            } else {
                this.monthNumber += 1
            }

            this.monthString = this.months[this.monthNumber]
            this.checkLeapYear ()
        },

        getPreviousMonth() {
            if (this.monthNumber === 0) {
                this.monthNumber = 11
                this.year        -= 1
            } else {
                this.monthNumber -= 1
            }
            
            this.monthString = this.months[this.monthNumber]
            this.checkLeapYear ()
        },

        selectDate() {
            event.target.classList.toggle('isSelected')
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
        grid-template-areas: 
            "mon   tue   wed   thu   fri   sat   sun  "
            "day1  day2  day3  day4  day5  day6  day7 "
            "day8  day9  day10 day11 day12 day13 day14"
            "day15 day16 day17 day18 day19 day20 day21"
            "day22 day23 day24 day25 day26 day27 day28"
            "day29 day30 day31 .     .     .     .    ";
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        background-color: rgb(148, 134, 134);
        gap: 25px;
        padding: 0 25px 0 25px;
        width: 700px;
        margin: auto;
        border-radius: 5px;
        margin-top: 2%;
        text-align: center;


        .day {
            height: 50px;
            width: 50px;
            padding-top: 15px;
            margin-bottom: 12px;
            border: 1px solid rgba(211, 220, 50, .6);
            border-radius: 3px;
            cursor: pointer;
        }

        .days.Lundi {
            grid-area: mon;
        }

        .days.Mardi {
            grid-area: tue;
        }

        .days.Mercredi {
            grid-area: wed;
        }

        .days.Jeudi {
            grid-area: thu;
        }

        .days.Vendredi {
            grid-area: fri;
        }

        .days.Samedi {
            grid-area: sat;
        }

        .days.Dimanche {
            grid-area: sun;
        }

        #day1 {
            grid-area: day1;
        }

        #day2 {
            grid-area: day2;
        }

        #day3 {
            grid-area: day3;
        }

        #day4 {
            grid-area: day4;
        }

        #day5 {
            grid-area: day5;
        }

        #day6 {
            grid-area: day6;
        }

        #day7 {
            grid-area: day7;
        }

        #day8 {
            grid-area: day8;
        }

        #day9 {
            grid-area: day9;
        }

        #day10 {
            grid-area: day10;
        }

        #day11 {
            grid-area: day11;
        }

        #day12 {
            grid-area: day12;
        }

        #day13 {
            grid-area: day13;
        }

        #day14 {
            grid-area: day14;
        }

        #day15 {
            grid-area: day15;
        }

        #day16 {
            grid-area: day16;
        }

        #day17 {
            grid-area: day17;
        }

        #day18 {
            grid-area: day18;
        }

        #day19 {
            grid-area: day19;
        }

        #day20 {
            grid-area: day20;
        }

        #day21 {
            grid-area: day21;
        }

        #day22 {
            grid-area: day22;
        }

        #day23 {
            grid-area: day23;
        }

        #day24 {
            grid-area: day24;
        }

        #day25 {
            grid-area: day25;
        }

        #day26 {
            grid-area: day26;
        }

        #day27 {
            grid-area: day27;
        }

        #day28 {
            grid-area: day28;
        }

        #day29 {
            grid-area: day29;
        }

        #day30 {
            grid-area: day30;
        }

        #day31 {
            grid-area: day31;
        }

        .isSelected {
            color: black;
            background-color: white;
            border-radius: 45%;
            font-weight: bold;
        }
    }
</style>
