export default class Reservation {
    id            : string
    date          : Date
    numberOfGuests: number
    emailAddress  : string
    postalAddress : string
    phoneNumber   : string


    constructor(
        id            : string, 
        date          : Date,
        numberOfGuests: number, 
        emailAddress  : string,
        postalAddress : string,
        phoneNumber   : string

        ) {
            this.id             = id
            this.date           = date
            this.numberOfGuests = numberOfGuests
            this.emailAddress   = emailAddress
            this.postalAddress  = postalAddress
            this.phoneNumber    = phoneNumber
    }
}
