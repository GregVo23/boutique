<script setup lang="ts"></script>

<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <b class="flex-fill mr-10">Cart Product</b>
    <span class="mr-10">x 1</span>
    <span class="mr-10">Prix: 12€</span>
    <button class="btn btn-danger">Supprimer</button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--grey-1);
}
</style>
