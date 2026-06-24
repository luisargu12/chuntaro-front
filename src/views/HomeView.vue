<template>
  <div>
    <!-- Navbar público -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">🏆 Chúntaro League</a>
        <div class="d-flex">
          <!-- Botón discreto para el Admin -->
          <router-link to="/login" class="btn btn-outline-light btn-sm">Acceso Admin</router-link>
        </div>
      </div>
    </nav>

    <!-- Contenido principal -->
    <div class="container mt-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold">Arma tu Torneo Rápido</h1>
        <p class="lead text-muted">
          Generador de llaves para retas de FIFA y seguimiento de la Liga Semiprofesional.
        </p>
      </div>

      <div class="row g-4">
        <!-- Tarjeta para Torneo Rápido (Local) -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body text-center p-5">
              <h3 class="card-title mb-3">🎮 Torneo Express</h3>
              <p class="card-text text-muted mb-4">
                Escribe los nombres, revuelve a los jugadores y genera las llaves al instante. (No
                requiere cuenta, ideal para hoy en la noche).
              </p>
              <router-link to="/torneo-express" class="btn btn-primary w-100 btn-lg">
                Crear Llaves Rápidas
              </router-link>
            </div>
          </div>
        </div>

        <!-- Tarjeta para la Liga Oficial (Desde Base de Datos) -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0 bg-light">
            <div class="card-body text-center p-5">
              <h3 class="card-title mb-3">🏅 Liga Semiprofesional</h3>
              <p class="card-text text-muted mb-4">
                Revisa la tabla general, las estadísticas y los próximos partidos oficiales
                gestionados por el administrador.
              </p>
              <button class="btn btn-dark w-100 btn-lg">Ver Clasificación</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Aquí más adelante pondremos la lógica para crear el torneo rápido
</script>

<style scoped>
/* Un poco de CSS para que se vea más moderno */
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
