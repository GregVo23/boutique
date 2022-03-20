<script setup lang="ts">
import type { ProductCartInterface } from "@/interfaces";

defineProps<{
  product: ProductCartInterface;
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <b class="mr-10">{{ product.title }}</b>
    <span class="flex-fill mr-10">x {{ product.quantity }}</span>
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
