<script setup lang="ts">
    import Banner       from "../components/Common/banner.vue"
    import Menu         from "../components/Menu/menu.vue"  
    import OrderDetails from "../components/Menu/orderDetails.vue"
    //import MenuOptions   from "./components/menuOptions.vue"
</script>

<template>
    <div id="main">
      <Banner />
      <!-- <MenuOptions /> -->
      <div class="orderContainer">
        <Menu />
        <OrderDetails />
      </div>
    </div>
</template>


<style lang="scss" scoped>
    .orderContainer {
      display: flex;
      justify-content: space-between;
    }
</style>
