<template>
    <div ref="dessert" id="dessertCard">
        <div>
            <p>{{ title }}</p>
            <p>{{ price }}€</p>
        </div>
      <img src="../../assets/addToBasket.svg" class="addToBasketIcon" alt="Add to basket icon" />
    </div>
</template>

<script lang="ts">
import api from '../../plugins/api'

export default {
    name: 'DessertCard',
    props: {
        title: { type: String, default: ''},
        price: { type: Number, default: ''},
        category: { type: String, default: ''},
    },

    mounted () {
        api.getRecipesByCategory('entrée')
    }
}

</script>

<style lang="scss">
    #dessertCard {
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