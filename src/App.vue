<script setup lang="ts">
    import Footer       from "./components/Common/footer.vue"  
    import Header       from "./components/Common/header.vue"  
    //import MenuOptions   from "./components/menuOptions.vue"
</script>

<template>
    <div id="main">
      <Header />
      <router-view />
      <Footer />
    </div>
</template>


<style lang="scss" scoped>
    #main {
      width: 100%;
    }

    .orderContainer {
      display: flex;
      justify-content: space-between;
    }
</style>
