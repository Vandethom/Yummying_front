export default class Reservation {
    date          : Date
    numberOfGuests: number
    emailAddress  : string
    postalAddress : string
    phoneNumber   : number


    constructor(
        date          : Date,
        numberOfGuests: number, 
        emailAddress  : string,
        postalAddress :  string,
        phoneNumber   : number

        ) {
            this.date           = date
            this.numberOfGuests = numberOfGuests
            this.emailAddress   = emailAddress
            this.postalAddress  = postalAddress
            this.phoneNumber    = phoneNumber
    }
}
