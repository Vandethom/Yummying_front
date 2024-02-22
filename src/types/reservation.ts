export default class Reservation {
    id            : string
    date          : Date
    numberOfGuests: number
    emailAddress  : string
    postalAddress : string
    phoneNumber   : number


    constructor(
        id            : string, 
        date          : Date,
        numberOfGuests: number, 
        emailAddress  : string,
        postalAddress :  string,
        phoneNumber   : number

        ) {
            this.id             = id
            this.date           = date
            this.numberOfGuests = numberOfGuests
            this.emailAddress   = emailAddress
            this.postalAddress  = postalAddress
            this.phoneNumber    = phoneNumber
    }
}
