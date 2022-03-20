<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";

defineProps<{
  product: ProductInterface;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
}>();
</script>

<template>
  <div class="product d-flex flex-column">
    <div
      class="product-image"
      :style="{ backgroundImage: `url(${product.image})` }"
    ></div>
    <div class="p-10 d-flex flex-column">
      <h4>{{ product.title }}</h4>
      <p>
        {{ product.description }}
      </p>
      <div class="d-flex flex-row align-items-center">
        <b class="flex-fill">{{ product.price }}</b>
        <button
          @click="emit('addProductToCart', product.id)"
          class="btn btn-primary"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  background-color: white;
  border: var(--border);
  border-radius: var(--border-radius);
  &-image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    height: 300px;
    background-size: cover;
    background-position: center;
  }
}
</style>
