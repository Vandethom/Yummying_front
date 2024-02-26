import { defineStore }  from 'pinia'
import { v4 as uuidv4 } from 'uuid'
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
        phoneNumber   : string): void {
            const id: string = uuidv4()
            
            this.reservation = {
              id            : id,
              date          : date,
              numberOfGuests: numberOfGuests,
              emailAddress  : emailAddress,
              postalAddress : postalAddress,
              phoneNumber   : phoneNumber
            }
      }
  }
})







