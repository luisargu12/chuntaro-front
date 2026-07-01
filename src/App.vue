<template>
  <!-- 1. Aquí colocamos el componente que acabamos de crear -->
  <NavBar />

  <!-- 2. Aquí es donde Vue inyecta las diferentes páginas (Home, Torneo, Login) -->
  <div class="container mt-4">
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>
<style>
/* Aquí pondremos estilos personalizados más adelante, como el fondo oscuro para las retas */
body {
  background-color: #f8f9fa;
}
</style>
