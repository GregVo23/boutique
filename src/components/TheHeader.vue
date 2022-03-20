<script setup lang="ts"></script>

<template>
  <header class="px-20 d-flex flex-row align-items-center">
    <a class="d-flex flex-row align-items-center mr-10 mr-20" href="#"
      ><img src="../assets/logo.png" alt="logo du site" /><span class="logo"
        >Boutique</span
      ></a
    >
    <ul class="d-flex flex-row flex-fill">
      <li class="mr-10"><a href="#">Boutique</a></li>
      <li><a href="#">Admin</a></li>
    </ul>
    <ul class="d-flex flex-row mr-20">
      <li class="mr-10"><a href="#">Connexion</a></li>
      <li><a href="#">Inscription</a></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--primary-1);
  a {
    color: var(--text-primary-color);
    img {
      width: 120px;
      padding-right: 5px;
    }
    .logo {
      font-weight: 700;
      font-size: 25px;
      color: var(--grey-1);
    }
  }
}
</style>
