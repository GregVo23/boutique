<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";
import CartProductList from "./CartProductList.vue";

defineProps<{
  cart: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<template>
  <div class="p-20">
    <h2>Panier</h2>
    <CartProductList
      :cart="cart"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
