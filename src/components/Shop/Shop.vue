<script setup lang="ts">
import type {
  FilterUpdate,
  ProductInterface,
  FiltersInterface,
} from "@/interfaces";
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
  (e: "updateFilter", updateFilter: FilterUpdate): void;
}>();
</script>

<template>
  <div class="d-flex flex-row">
    <ShopFilters
      :filters="filters"
      class="shop-filter"
      @update-filter="emit('updateFilter', $event)"
    />
    <ShopProductList
      :products="products"
      class="flex-fill"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.shop-filter {
  flex: 0 0 200px;
}
</style>
