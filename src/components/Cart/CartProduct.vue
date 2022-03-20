<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";

defineProps<{
  product: ProductInterface;
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <b class="flex-fill mr-10">{{ product.title }}</b>
    <span class="mr-10">x 1</span>
    <span class="mr-10">Prix: {{ product.price }} €</span>
    <button
      @click="emit('removeProductFromCart', product.id)"
      class="btn btn-danger"
    >
      Supprimer
    </button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--grey-1);
}
</style>
