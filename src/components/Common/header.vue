<template>
    <div id="header">
      <router-link :to="{ name: 'home' }">
        <img src="../../assets/yummying.logo.svg" class="logo" alt="Vite logo" />
      </router-link>
      <div class="menu_options">
        <router-link :to="{ name: 'home'}">
          <p>Accueil</p>
        </router-link>
        <router-link :to="{ name: 'reservation'}">
          <p>Réservation</p>
        </router-link>
        <router-link :to="{ name: 'about'}">
          <p>A propos</p>
        </router-link>
        <router-link :to="{ name: 'account'}">
          <p>Mon compte</p>
        </router-link>
        <router-link :to="{ name: 'cart' }">
          <img src="../../assets/basket.icon.svg" class="basket_icon" alt="Basket Icon" />
        </router-link>
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
        background-color: #ffffff;
        align-items: center;
        gap        : 12rem;
        margin     : 0;
        top        : 0;
        left       : 0;
        height     : 105px;

        .logo {
            margin-left: 25%;
            cursor: pointer;
        }

        .menu_options {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          margin-right: 2.5vw;
          color: black;
          cursor: pointer;

          p {
            color: black;
            font-weight: bold;
            width: 100px;

            &:hover {
              text-decoration: underline;
              color: rgba(black, 0.5);
            }
          }
        }

        .basket_icon {
          margin-top: 12px;
          cursor: pointer;
        }
    }
</style>