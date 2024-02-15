<template>
    <div id="menuOptions"> 
        <p>Entrée</p>
        <p>Plat</p>
        <p>Dessert</p>
        <p>Boisson</p>
        <p>Sides</p>
    </div>
</template>

<script lang="ts">
    export default {
    
}
</script>

<style lang="scss">
    #menuOptions {
        display: flex;
        justify-content: center;
        background-color: #fdf9f6;
        border-bottom: 1px solid rgba(255, 0, 0, .5);;

        p {
            color: black;
            margin: 12px;
            margin-right: 40px;
        }
    }
</style>