<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";
import data from "./data/product";
import { reactive } from "vue";
import { computed } from "vue";
import type {
  FiltersInterface,
  ProductInterface,
  ProductCartInterface,
  FilterUpdate,
} from "./interfaces";
import { DEFAULT_FILTERS } from "./data/filters";

//const products = reactive<ProductInterface[]>(data);
//const cart = reactive<ProductInterface[]>([]);

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
  filters: FiltersInterface;
}>({
  products: data,
  cart: [],
  filters: { ...DEFAULT_FILTERS },
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

const filteredProducts = computed(() => {
  return state.products.filter((product) => {
    if (
      product.title
        .toLocaleLowerCase()
        .startsWith(state.filters.search.toLocaleLowerCase()) &&
      product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category ||
        state.filters.category === "all")
    ) {
      return true;
    } else {
      return false;
    }
  });
});

function updateFilter(filterUpdate: FilterUpdate) {
  if (filterUpdate.search != undefined) {
    state.filters.search = filterUpdate.search;
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange;
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category;
  } else {
    state.filters = { ...DEFAULT_FILTERS };
  }
}
</script>
<template>
  <TheHeader />
  <div class="app-container" :class="{ gridEmpty: cartEmpty }">
    <Shop
      :products="filteredProducts"
      :filters="state.filters"
      class="shop"
      @add-product-to-cart="addProductToCart"
      @update-filter="updateFilter"
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
