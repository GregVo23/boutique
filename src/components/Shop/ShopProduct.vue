<script setup lang="ts"></script>

<template>
  <div class="product d-flex flex-column">
    <div class="product-image"></div>
    <div class="p-10 d-flex flex-column">
      <h4>Product</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam,
        tempore laborum libero id?
      </p>
      <div class="d-flex flex-row align-items-center">
        <b class="flex-fill">12€</b>
        <button class="btn btn-primary">Ajouter au panier</button>
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
    background-image: url(../../assets/raviolis.jpg);
    height: 300px;
    background-size: cover;
    background-position: center;
  }
}
</style>
