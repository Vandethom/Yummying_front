import { defineStore }  from 'pinia'
import Recipe           from '../types/recipe'
import Reservation      from '../types/reservation'

export const useOrderStore = defineStore('order', {
  state: () => ({
      cart       : [] as Recipe[],
      reservation: {} as Reservation
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
      console.log(item)

      item.quantity += 1
    },

    decrement(id: String): void {
      const item: any = this.cart.find(cartItem => cartItem._id === id)
      console.log(item)

      item.quantity -= 1
    }
  }
})
