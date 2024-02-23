import { defineStore } from 'pinia'
import Recipe          from '../types/recipe'

export const useOrderStore = defineStore('order', {
  state: () => ({
      cart    : [] as Recipe[],
      starters: 0,
      dishes  : 0,
      desserts: 0,
      drinks  : 0
  }),

  actions: {
    push(item: Recipe): void {
      const existingItem: any = this.cart.find(cartItem => cartItem._id === item._id)

      if (!existingItem) {
        this.cart.push(item)
      } else {
        existingItem.quantity += 1
      }
    },

    increment(id: String): void {
      const item: any = this.cart.find(cartItem => cartItem._id === id)

      item.quantity += 1

      switch (item.category) {
        case 'entrée':
          this.starters += 1
          break
        case 'plat':
          this.dishes += 1
          break
        case 'dessert':
          this.desserts += 1
          break
        case 'boisson':
          this.drinks += 1
          break
        default:
          console.log('Case should not happen. Category must be starter, dish or dessert')
          break
      }
    },

    decrement(id: String): void {
      const item: any = this.cart.find(cartItem => cartItem._id === id)
      console.log(item)
      item.quantity -= 1

      if (item.quantity < 1) {
        const elementToRemove = this.cart.findIndex(a => a._id === id)
        this.cart.splice(elementToRemove, 1)
      }

      switch (item.category) {
        case 'entrée':
          this.starters -= 1
          break
        case 'plat':
          this.dishes -= 1
          break
        case 'dessert':
          this.desserts -= 1
          break
        case 'boisson':
          this.drinks -= 1
          break
        default:
          console.log('Case should not happen. Category must be starter, dish or dessert')
          break
      }
    }
  }
})
