<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Panel de Administración 🏆</h2>
      <button @click="cerrarSesion" class="btn btn-outline-danger" :disabled="cargando">
        {{ cargando ? "Saliendo..." : "Cerrar Sesión" }}
      </button>
    </div>

    <div class="card shadow-sm">
      <div class="card-body p-5 text-center">
        <h4>¡Bienvenido, Admin!</h4>
        <p class="text-muted mt-3">
          Próximamente aquí gestionaremos las llaves del torneo, subiremos fotos de las retas y
          asignaremos los "Byes".
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const cargando = ref(false);

const cerrarSesion = async () => {
  cargando.value = true;
  try {
    // Le decimos a Laravel que destruya la sesión
    await axios.post("/logout");
    // Si sale bien, regresamos al login
    router.push("/");
  } catch (error) {
    console.error("Error al cerrar sesión", error);
  } finally {
    cargando.value = false;
  }
};
</script>
