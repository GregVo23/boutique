<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";
</script>
<template>
  <div class="app-container">
    <TheHeader />
    <Shop class="shop" />
    <Cart class="cart b3" />
    <TheFooter class="footer b4" />
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
  display: grid;
  grid-template-areas: "header header" "shop cart" "footer footer";
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
  min-height: 100vh;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}

.shop {
  grid-area: shop;
}
</style>
