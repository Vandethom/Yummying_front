import { useOrderStore } from '../store/order'
import Recipe            from '../types/recipe'

export default class Cart {
    static async addItemToCart(item: Recipe): Promise<void> {
        const order = useOrderStore()
        const newItem = {
            _id     : item._id,
            title   : item.title,
            price   : item.price,
            category: item.category,
            quantity: 1
        }
        
            order.push(newItem)
    }

    static async fetch(): Promise<Recipe[]> {
        const order = useOrderStore()

        return order.cart
    }
}

