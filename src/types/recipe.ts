export default class Recipe {
    _id     : string
    title   : string
    price   : number
    category: string
    quantity: number

    constructor(id: string, title: string, price: number, category: string) {
        this._id      = id
        this.title    = title
        this.price    = price
        this.category = category
        this.quantity = 1
    }
}
