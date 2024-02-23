import { useOrderStore } from '../store/store'
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

            switch (item.category) {
                case 'entrée':
                  order.starters += 1
                  break
                case 'plat':
                  order.dishes += 1
                  break
                case 'dessert':
                  order.desserts += 1
                  break
                case 'boisson':
                  order.drinks += 1
                  break
                default:
                  console.log('Case should not happen. Category must be starter, dish or dessert')
                  break
              }
    }

    static async fetch(): Promise<Recipe[]> {
        const order = useOrderStore()

        return order.cart
    }
}

