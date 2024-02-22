import axios       from 'axios'
import Reservation from '../types/reservation.ts'

export default class Api {
    static async getRecipesByCategory(cat: String) {
        const category   = cat
        const data       = await axios.get(`http://localhost:8080/recipes/${category}`)
        const parsedData = JSON.parse(JSON.stringify(data.data))

        return parsedData
    }

    static async getRecipeById(id: String) {
        const params     = id
        const data       = await axios.get(`http://localhost:8080/recipe/${params}`)
        const parsedData = JSON.parse(JSON.stringify(data.data))

        return parsedData
    }

    static async makeReservation(reservation: Reservation) {
        const data    = reservation
        const booking = await axios.post(`http://localhost:8080/reservation`, data)

        return booking
    }
}

