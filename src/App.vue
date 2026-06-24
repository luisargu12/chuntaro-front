<template>
  <div class="container mt-5">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style>
/* Aquí pondremos estilos personalizados más adelante, como el fondo oscuro para las retas */
body {
  background-color: #f8f9fa;
}
</style>
