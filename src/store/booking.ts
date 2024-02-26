import { defineStore }  from 'pinia'
import Reservation      from '../types/reservation'

export const useBookingStore = defineStore('booking', {
  state: () => ({
      reservation: {} as Reservation
  }),

  actions: {
    bookReservation(
        date          : Date, 
        numberOfGuests: number, 
        emailAddress  : string,
        postalAddress : string,
        phoneNumber   : number): void {
            
            this.reservation = {
              date          : date,
              numberOfGuests: numberOfGuests,
              emailAddress  : emailAddress,
              postalAddress : postalAddress,
              phoneNumber   : phoneNumber
            }
      }
  }
})







