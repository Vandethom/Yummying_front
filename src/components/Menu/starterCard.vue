<template>
    <div id="starterCard">
        <div>
            <p>{{ title }}</p>
            <p>{{ price }}€</p>
        </div>
      <img 
        @click="addToCart()"
        src="../../assets/addToBasket.svg" 
        class="addToBasketIcon"
        alt="Add to basket icon"
         />
    </div>
</template>

<script lang="ts">
import api  from '../../plugins/api'
import cart from '../../plugins/cart'
import Recipe from '../../types/recipe'

export default {
    name: 'StarterCard',
    data() {
        return {
            item: {} as Recipe
        }
    },

    props: {
        uuid:     { type: String, default: ''},
        title:    { type: String, default: ''},
        price:    { type: Number, default: ''},
        category: { type: String, default: ''},
    },

    mounted () {
        api.getRecipesByCategory('entrée')
    },

    methods: {
        addToCart() {
            this.item._id      = this.uuid
            this.item.title    = this.title
            this.item.price    = this.price
            this.item.category = this.category
            
            cart.addItemToCart(this.item)
        }
    }
}

</script>

<style lang="scss">
    #starterCard {
        display: flex;
        justify-content: space-between;
        color: black;
        font-size: 14px;
        background-color: #fdf9f6;
        padding-left: 6px;
        width:  300px;
        height: 80px;
        border: 1px solid rgba(255, 0, 0, .5);;

        .addToBasketIcon {
            width: 24px;
            height: 24px;
            position: relative;
            top: 45px;
            right: 6px;
            cursor: pointer;
        }
    }
</style>