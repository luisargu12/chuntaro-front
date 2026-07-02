<template>
  <!--
    Aquí está la magia:
    1. fixed-top hace que el menú siga a la cámara.
    2. :class evalúa si isScrolled es true o false para cambiar entre sólido y transparente.
  -->
  <nav
    :class="[
      'navbar navbar-expand-lg navbar-dark fixed-top custom-navbar',
      isScrolled ? 'navbar-solid shadow' : 'navbar-transparent',
    ]"
  >
    <div class="container position-relative mt-3">
      <!-- LOGO A LA IZQUIERDA (CUELGA A LA MITAD DEL BORDE) -->
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="@/assets/img/escudo.png" alt="Escudo Chuntaro FC" class="logo-escudo" />
      </router-link>

      <!-- Botón para móviles -->
      <button
        class="navbar-toggler border-0 ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Contenedor de las opciones -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- OPCIONES DEL MENÚ (Alineadas a la derecha con ms-auto) -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-3 mt-lg-0 align-items-center gap-3">
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold" to="/"
              >Martes Botanero</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white fw-semibold"> Plantilla </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/torneo-express"
              class="text-decoration-none btn-reta text-center d-inline-block"
            >
              Torneo
            </router-link>
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
  background-color: var(--color-primary, #51241f); /* El tinto #51241F */
  padding: 10px 0; /* Se hace un poco más delgado al scrollear */
}

/* Estilo para el botón de la reta de FIFA */
.btn-reta {
  background-color: var(--color-accent, #e5b25d); /* El dorado #E5B25D */
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

/* Estilos específicos del navbar y el escudo colgante */
.navbar-brand {
  letter-spacing: 0.5px;
  z-index: 1050; /* Asegura que el logo esté por encima de otros elementos */
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  left: 15px;
  transition: all 0.4s ease;
}

.logo-escudo {
  width: 100px;
  height: auto;
  transition: width 0.4s ease;
}

/* Reducimos sutilmente el escudo cuando el menú se contrae al hacer scroll */
.navbar-solid .logo-escudo {
  width: 80px;
}

/* En pantallas móviles fijamos la posición vertical para evitar que el logo
   se mueva hacia abajo al expandir el menú desplegable */
@media (max-width: 991.98px) {
  .navbar-brand {
    top: 40px;
  }

  .navbar-solid .navbar-brand {
    top: 30px;
  }
}
</style>
