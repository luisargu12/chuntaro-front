<template>
  <div>
    <!-- Contenido principal -->
    <div>
      <!-- HERO SECTION -->
      <header class="hero-section d-flex align-items-center justify-content-center text-center">
        <!-- Capa oscura para que el texto blanco resalte -->
        <div class="hero-overlay"></div>

        <!-- Contenido del Hero -->
        <div class="container position-relative z-1 mt-5">
          <h2></h2>
        </div>
      </header>

      <section class="container-sm my-5">
        <h2 class="titulo-banner">¡MÁS QUE UN SENTIR!</h2>
        <div class="linea mt-3"></div>
      </section>
      <!-- CONTENIDO PARA HACER SCROLL -->
      <main class="container py-5 my-5">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="fw-bold mb-3">Sigue la Liga Oficial</h2>
            <p class="text-muted">
              Desliza hacia abajo para ver cómo la barra de navegación cambia de transparente al
              color Tinto de Chuntaro FC.
            </p>
          </div>
        </div>

        <!-- Tarjetas de relleno para dar altura a la página -->
        <div class="row g-4 mt-4">
          <div class="col-md-4" v-for="i in 3" :key="i">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-5 text-center">
                <h4>Jornada {{ i }}</h4>
                <p class="text-muted">
                  Resultados, goleadores y estadísticas del último encuentro disputado en la cancha
                  oficial.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Más espacio para asegurar el scroll en monitores grandes -->
        <div style="height: 50vh"></div>
      </main>
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

.hero-section {
  min-height: 85vh;
  position: relative;
  background-image: url("@/assets/img/hero.jpg");
  background-size: cover;
  background-position: center;
  color: white;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
}
.btn-reta {
  background-color: #e5b25d;
  border: none;
}
.btn-reta:hover {
  background-color: #d4a04c;
}
</style>
