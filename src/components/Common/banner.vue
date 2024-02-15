<template>
    <div id="banner"> 
      <img src="../../assets/banner.jpg" class="bannerImage" alt="Vite logo" />
      <div class="bannerText">
        <h1>Au Colibri</h1>
        <h2>Chef à domicile</h2>
        <p class="bannerDescription">Cuisine multi-culturelle</p>
        <p class="bannerPhoneNumber">01.66.6.99.90</p>
      </div>
</div>
</template>

<script lang="ts">
    export default {
    
}
</script>

<style lang="scss">
    #banner {
        display: grid;
        place-items: center;
        place-content: center;
        margin: 0;
        height: 500;
        background-color: rgb(248, 209, 209);

        * {
            grid-area: container;
        }

        .bannerImage {
            height: 400px;
        }

        h1, .bannerDescription {
            margin-bottom: 0;
        }

        h2, .bannerPhoneNumber {
            margin-top: 0;
        }

        .bannerText {
            border-radius: 2px;
            margin-left: 35vw;
            width: 18vw;
            background: rgb(190, 188, 188);
            padding-left: 22px;
            color: rgb(24, 23, 23);
        }
    }
</style>