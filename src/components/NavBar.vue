<template>
  <nav
    class="navbar fixed-top navbar-expand-lg custom-navbar"
    :class="isScrolled ? 'navbar-solid shadow-sm' : 'navbar-transparent'"
  >
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="#"> EQUIPO FC </a>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon" style="filter: invert(1)"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Plantilla</a>
          </li>
          <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
            <a class="nav-link btn-reta" href="#">⚡ Retar en FIFA</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Estado reactivo para saber si el usuario ha hecho scroll
const isScrolled = ref(false);

// Función que evalúa la posición del scroll
const handleScroll = () => {
  // Si el usuario baja más de 50px, cambia a true
  isScrolled.value = window.scrollY > 50;
};

// Escuchamos el evento cuando el componente se monta
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Limpiamos el evento cuando se destruye para evitar fugas de memoria
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Transición suave para todos los cambios en el navbar */
.custom-navbar {
  transition:
    background-color 0.4s ease,
    padding 0.4s ease,
    box-shadow 0.4s ease;
  padding: 20px 0; /* Un poco más alto al inicio (estilo Inter) */
}

/* Estado 1: Hasta arriba (Transparente) */
.navbar-transparent {
  background-color: transparent;
  /* Opcional: Un ligero degradado negro arriba para que el texto blanco siempre se lea si la foto de fondo es muy clara */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
}

/* Estado 2: Al hacer scroll (Color sólido) */
.navbar-solid {
  background-color: var(--color-primary); /* El tinto #51241F */
  padding: 10px 0; /* Se hace un poco más delgado al scrollear */
}

/* Estilo para el botón de la reta de FIFA */
.btn-reta {
  background-color: var(--color-accent); /* El dorado #E5B25D */
  color: #1e293b !important;
  font-weight: 700;
  border-radius: 6px;
  padding: 8px 20px !important;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.btn-reta:hover {
  background-color: #d4a04c; /* Dorado más oscuro */
  transform: translateY(-2px); /* Pequeño salto al pasar el mouse */
}

/* Efecto hover sutil para los links normales */
.nav-link.text-white {
  position: relative;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.nav-link.text-white:hover {
  opacity: 1;
}
</style>
