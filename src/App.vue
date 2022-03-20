<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";
import data from "./data/product";
import { reactive } from "vue";
import { computed } from "vue";
import type { ProductInterface, ProductCartInterface } from "./interfaces";

//const products = reactive<ProductInterface[]>(data);
//const cart = reactive<ProductInterface[]>([]);

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
}>({
  products: data,
  cart: [],
});

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId);
  if (product) {
    const productInCart = state.cart.find(
      (product) => product.id === productId
    );
    if (productInCart) {
      productInCart.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  }
}

function removeProductFromCart(productId: number): void {
  const productFromCart = state.cart.find(
    (product) => product.id === productId
  );
  if (productFromCart) {
    if (productFromCart.quantity === 1) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    } else {
      productFromCart.quantity--;
    }
  }
}

const cartEmpty = computed(() => state.cart.length === 0);
</script>
<template>
  <TheHeader />
  <div class="app-container" :class="{ gridEmpty: cartEmpty }">
    <Shop
      :products="state.products"
      @add-product-to-cart="addProductToCart"
      class="shop"
    />
    <Cart
      v-if="!cartEmpty"
      :cart="state.cart"
      class="cart"
      @remove-product-from-cart="removeProductFromCart"
    />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/base.scss";
@import "./assets/scss/debug.scss";

.app-container {
  display: grid;
  grid-template-areas: "header header" "shop cart" "footer footer";
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
  min-height: 100vh;
}

.gridEmpty {
  grid-template-areas: "header" "shop" "footer";
  grid-template-columns: 100%;
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
