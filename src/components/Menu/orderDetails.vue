<template>
    <div id="orderDetails">
        <p>Panier</p>
        <h4 v-if="this.order.starters > 0">Entrées</h4>
        <h4 v-if="this.order.dishes > 0">Plats</h4>
        <h4 v-if="this.order.desserts > 0">Desserts</h4>
        <h4 v-if="this.order.drinks > 0">Boissons</h4>
        <div 
            class="orderItem"
            v-for="item in cart"
            :key="item._id"
            :id="item._id"
            :ref="item._id"
        >
            <p>{{ item.title }}</p>
            <div class="ItemQuantity">
                <p class="sign"
                   @click="decrement(item._id)"
                >
                    -
                </p>
                <p>{{ item.quantity }}</p>
                <p class="sign"
                   @click="increment(item._id)"
                >
                    +
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Cart              from '../../plugins/cart'
import CartItem          from '../../plugins/cart'
import Recipe            from '../../types/recipe'
import { useOrderStore } from '../../store/store'

export default {
    name: 'OrderDetails',

    data() {
        return {
            cart: [] as Recipe[],
            starters: [] as Recipe[],
            item: {} as Recipe,
            order: useOrderStore()
        }
    },

    mounted () {
        this.fetchCart()
    },

    computed: {
        sortStarters() {
            const starterssss = this.cart.find(item => item.category === 'entrée')
            
            this.starters.push(starterssss)
        }
    },

    methods: {
        async fetchCart(): Promise<Cart> {
            this.cart = await Cart.fetch()

            return this.cart
        },

        increment(id: string) {   
            this.order.increment(id)
        },

        decrement(id: String) {   
            this.order.decrement(id)
        }
    }
}



</script>

<style lang="scss" scoped>
    #orderDetails {
        width: 240px;
        margin-top: 40px;
        margin-right: 40px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 2px;
        color: black;
        padding: 10px;

        .orderItem {
            display: flex;
            margin: 0;
            justify-content: space-between;

            .ItemQuantity {
                display: flex;
                
                p {
                    margin-left: 4px ;
                    margin-right: 4px;
                }

                .sign {
                    cursor: pointer;
                    font-weight: bold;
                }
            }
        }
    }
</style>