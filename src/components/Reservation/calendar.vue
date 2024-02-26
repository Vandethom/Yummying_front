<template>
    <div>
        <VDatePicker class="calendar" 
                     expanded
                     is24hr
                     :mode="mode"
                     :rules="rules"
                     v-model="reservation.pickedDate">
            <template #footer>
                <form class="reservationDetails" ref="form">
                    <h4>Autres détails sur la réservartion</h4>
                    <div class="inputContainer">
                        <pre><label>Nombre de personnes :</label></pre>
                        <input type="number" 
                               min="1" 
                               v-model="reservation.numberOfGuests">
                    </div>
                    <div class="inputContainer">
                        <pre><label>Adresse             :</label></pre>
                        <input type="text" 
                               v-model="reservation.postalAddress">
                    </div>
                    <div class="inputContainer">
                        <pre><label>E-mail              :</label></pre>
                        <input type="email" 
                               v-model="reservation.emailAddress">
                    </div>
                    <div class="inputContainer">
                        <pre><label>Numéro de téléphone :</label></pre>
                        <input type="tel" 
                               pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                               v-model="reservation.phoneNumber">
                    </div>
                </form>
                <div class="buttonContainer">
                    <button id="footerButton"
                            @click="bookReservation()">
                        Reserver
                    </button>
                </div>
            </template>
        </VDatePicker>
    </div>
  </template>

<script lang="ts">
import { ref }             from 'vue';
import { useBookingStore } from '../../store/booking'
import Reservation         from '../../types/reservation'
import api                 from '../../plugins/api'

export default {
    name: 'Calendar',

    data () {
        return {
            mode : ref('dateTime'),
            rules: ref([
                { 
                    hours  : { min: 8, max: 22 },
                    minutes: { interval: 15}
                },
            ]),
            booking: useBookingStore(),

            reservation: {
                pickedDate    : ref(new Date()),
                numberOfGuests: null,
                postalAddress : null,
                emailAddress  : null,
                phoneNumber   : null
            } as unknown as Reservation

        }
    },

    methods: {
        bookingIsValid(bookingDate: Date) {
            const dateNow = Date.now() as unknown as Date
            return dateNow < bookingDate
        },

        bookReservation() {
            switch (true) {
                case !this.bookingIsValid(this.reservation.pickedDate):
                    alert('La date ne peut être antérieure à celle du jour.')
                    break
                
                case !this.reservation.numberOfGuests:
                    alert('Veuillez réserver pour une personne au minimum.')
                    break

                case !this.reservation.postalAddress:
                    alert('Veuillez remplir l\'adresse postale.')
                    break

                case !this.reservation.emailAddress:
                    alert('Veuillez remplir l\'adresse email.')
                    break

                case (!this.reservation.emailAddress.includes('@')
                   ||((!this.reservation.emailAddress.includes('.fr'))
                   &&(!this.reservation.emailAddress.includes('.com'))
                   &&(!this.reservation.emailAddress.includes('.uk'))
                   &&(!this.reservation.emailAddress.includes('.de'))
                   &&(!this.reservation.emailAddress.includes('.cc'))
                   &&(!this.reservation.emailAddress.includes('.org')))):
                    alert('Veuillez saisir un email au bon format.')
                    break;

                case !this.reservation.phoneNumber:
                    alert('Veuillez remplir le numéro de téléphone.')
                    break

                case this.reservation.phoneNumber.length < 10:
                    alert('Veuillez saisir un numéro de téléphone correct.')
                    break
                                        
                default:
                    this.booking.bookReservation(
                        this.reservation.pickedDate,
                        this.reservation.numberOfGuests,
                        this.reservation.emailAddress,
                        this.reservation.postalAddress,
                        this.reservation.phoneNumber
                    );
                    
                    api.makeReservation(this.reservation);
                    (this.$refs['form'] as any).reset()
                    alert('Votre réservation a bien été effectuée, vous recevrez rapidement un email de confirmation.')
                    break
            }
        }
    }
}
</script>

<style lang="scss">
    button {
        background-color: rgb(238, 235, 235);
        color: black;
    }
    
    .buttonContainer {
        width: 105px;
        margin: 8px auto;

        #footerButton {
            background-color: rgb(118, 91, 238);

            &:hover {
                background-color: rgba(118, 91, 238, 0.8);
            }
        }
    }

    .vc-container .vc-weekday-1, .vc-container .vc-weekday-7 {
      color: #8791bd;
    }

    .calendar {
        background-color: white;
        color: black;
        margin: auto;
    }

    .reservationDetails {
        width: 630px;
        height: 220px;
        border: 1px solid rgba($color: #000000, $alpha: 0.3);
        margin: auto;
        border-radius: 5px;
        background-color: white;
        color: black;

        h4, p {
                margin: 0 12px;
            }
        .inputContainer {
            padding: 0 12px;
            display: flex;
            align-items: center;


            input {
                height: 20px;
                background-color: white;
                color: black;
                margin: 0 12px;
                border: none;
                border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
               -webkit-appearance: none;
            }
        }
    }
</style>
