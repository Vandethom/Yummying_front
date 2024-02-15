<template>
    <div id="header">
      <img src="../../assets/yummying.logo.svg" class="logo" alt="Vite logo" />

      <div class="menu_options">
        <p>Accueil</p>
        <p>Réservation</p>
        <p>A propos</p>
        <p>Mon compte</p>
        <img src="../../assets/basket.icon.svg" class="basket_icon" alt="Basket Icon" />
      </div>
    </div>
</template>

<script lang="ts">
    export default {
    
}
</script>

<style lang="scss">
    #header {
        display: grid;
        grid-template-columns: 1fr fit-content(40%);
        align-items: center;
        gap: 12rem;
        margin: 0;
        top:    0;
        left:   0;
        height: 105px;
        background-color: #fdf9f6;

        .logo {
            margin-left: 25%;
            cursor: pointer;
        }

        .menu_options {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2.5rem;
          color: black;
          cursor: pointer;
        }

        .basket_icon {
          margin-top: 12px;
          cursor: pointer;
        }
    }
</style>