<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";
import data from "./data/product";
import { reactive } from "vue";
import type { ProductInterface } from "./interfaces/product.interface";

//const products = reactive<ProductInterface[]>(data);
//const cart = reactive<ProductInterface[]>([]);

const state = reactive<{
  products: ProductInterface[];
  cart: ProductInterface[];
}>({
  products: data,
  cart: [],
});

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId);
  if (product && !state.cart.find((product) => product.id === productId)) {
    state.cart.push({ ...product });
  } else {
    console.log(state.cart);
  }
}
</script>
<template>
  <TheHeader />
  <div class="app-container">
    <Shop
      :products="state.products"
      @add-product-to-cart="addProductToCart"
      class="shop"
    />
    <Cart class="cart" />
    <TheFooter class="footer" />
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
