<template>
    <div id="menu">
        <h4 id="starter">Entrée</h4>
         <StarterCard 
             v-for='starter in starters' :key='starter._id'
             :uuid     ='starter._id'
             :title    ='starter.title'
             :price    ='starter.price'
             :category ='starter.category'
          />
        <h4 id="dish">Plat</h4>
         <DishCard 
             v-for='dish in dishes' :key='dish._id'
             :uuid     ='dish._id'
             :title    ='dish.title'
             :price    ='dish.price'
             :category ='dish.category'
          />
        <h4 id="dessert">Dessert</h4>
         <DessertCard 
             v-for='dessert in desserts' :key='dessert._id'
             :uuid     ='dessert._id'
             :title    ='dessert.title'
             :price    ='dessert.price'
             :category ='dessert.category'
          />
        <h4 id="drink">Boisson</h4>
         <DrinkCard 
             v-for='drink in drinks' :key='drink._id'
             :uuid     ='drink._id'
             :title    ='drink.title'
             :price    ='drink.price'
             :category ='drink.category'
          />
    </div>
</template>

<script lang="ts">
import api         from '../../plugins/api'
import StarterCard from './starterCard.vue'
import DishCard    from './starterCard.vue'
import DessertCard from './starterCard.vue'
import DrinkCard   from './starterCard.vue'
import Recipe      from '../../types/recipe'

export default {
    components: {
        StarterCard,
        DishCard,
        DessertCard,
        DrinkCard
    },
    
    data() {
        return {
            starters: [] as Recipe[],
            dishes:   [] as Recipe[],
            desserts: [] as Recipe[],
            drinks:   [] as Recipe[]
        }
    },

    mounted() {
        this.getRecipes()
    },

    methods: {
        async getRecipes() {
            this.starters = await api.getRecipesByCategory('entrée')
            this.dishes   = await api.getRecipesByCategory('plat')
            this.desserts = await api.getRecipesByCategory('dessert')
            this.drinks   = await api.getRecipesByCategory('boisson')
        }
    }
}
</script>

<style lang="scss">
    #menu {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin: 22px;
        margin-left: 250px;

        h4 {
            grid-column-start: 1;
            grid-column-end: 5;
            color: black;
        }
    }
</style>