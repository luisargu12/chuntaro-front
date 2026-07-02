<template>
    <!-- Columna 1: Marca y descripción -->
    <div class="col-lg-4 col-md-6">
      <h5 class="fw-bold mb-3 d-flex align-items-center gap-2">
        <span class="fs-4">⚽</span> Chuntaro FC
      </h5>
      <p class="text-muted small">
        La liga semiprofesional definitiva. Gestiona tus retas, organiza torneos express y sigue de cerca las estadísticas de la temporada oficial.
      </p>
    </div>

    <!-- Columna 2: Enlaces Rápidos -->
    <div class="col-lg-4 col-md-6">
      <h5 class="fw-bold mb-3">Enlaces Rápidos</h5>
      <ul class="list-unstyled d-flex flex-column gap-2 small">
        <li>
          <router-link to="/" class="text-decoration-none footer-link">Inicio</router-link>
        </li>
        <li>
          <router-link to="/torneo-express" class="text-decoration-none footer-link">Torneo Express</router-link>
        </li>
        <li>
          <router-link to="/login" class="text-decoration-none footer-link">Acceso Administrador</router-link>
        </li>
      </ul>
    </div>

    <!-- Columna 3: Contacto / Redes (Opcional para el futuro) -->
    <div class="col-lg-4 col-md-12">
      <h5 class="fw-bold mb-3">Síguenos</h5>
      <p class="text-muted small mb-2">Visita nuestro portal oficial:</p>
      <a href="https://chuntaro.com.mx" target="_blank" class="text-decoration-none fw-bold text-primary">
        chuntaro.com.mx
      </a>
    </div>
  </div>

  <!-- Fila de Copyright -->
  <hr class="border-secondary mt-4 mb-3" />
  <div class="row">
    <div class="col-12 text-center text-muted small">
      &copy; {{ anioActual }} Chuntaro FC. Todos los derechos reservados.
    </div>
  </div>
</div>

</template>
