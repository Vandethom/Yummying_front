<template>
    <div id="main">
      <Header />
      <Banner />
      <!-- <MenuOptions /> -->
      <div class="orderContainer">
        <Menu />
        <OrderDetails />
      </div>
      <Footer />
    </div>
</template>

<script setup lang="ts">
    import Banner       from "../components/Common/banner.vue"  
    import Footer       from "../components/Common/footer.vue"  
    import Header       from "../components/Common/header.vue"  
    import Menu         from "../components/Menu/menu.vue"  
    import OrderDetails from "../components/Menu/orderDetails.vue"
</script>

<style lang="scss" scoped>
    #main {
      width: 100%;
    }

    .orderContainer {
      display: flex;
      justify-content: space-between;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
</style>
