<template>
    <div id="footer"> 
        <div class="footerContainer">
        </div>
        <div class="footerContent">
            <p>Chez Riad, au Colibri, on cuisine des recettes du monde entier. Le tour du monde d'un chef dans votre assiette !</p>
            <img src="../../assets/yummying.logo.svg" class="logo" alt="Vite logo" />
        </div>
        <p class="address">66 rue de Satanville, 66699 Enfer-sur-Terre -- Design By Vonloth</p>
    </div>
</template>

<script lang="ts">
    export default {
    
}
</script>

<style lang="scss" scoped>
    #footer {
        display: grid;
        place-items: center;
        place-content: center;
        margin-top: 200px;
        background-color: rgb(248, 209, 209);
        height: 150px;

        * {
            grid-area: footerContainer;
        }

        .footerContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
        }

        .footerContent {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-radius: 2px;
            margin-bottom: 200px;
            width: 800px;
            height: 200px;
            background-color: #fdf9f6;

            p {
                grid-column-start: 1;
                grid-column-end: 1;
                margin-left: 36px;
                color: black;
            }
            
            .logo {
                grid-column-start: 3;
                margin-left: 80px;
                cursor: pointer;
            }
        }

        
        .address {
            color: black;
            position: relative;
            top: 50px;
        }
    }
</style>