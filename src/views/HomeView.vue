<template>
  <div>
    <!-- Contenido principal -->
    <div>
      <!-- HERO SECTION -->
      <header class="hero-section d-flex align-items-end justify-content-start text-start pb-5">
        <!-- Imagen de fondo animable -->
        <div class="hero-bg"></div>
        <!-- Capa oscura para que el texto blanco resalte -->
        <div class="hero-overlay"></div>

        <!-- Contenido del Hero -->
        <div class="container position-relative z-2">
          <div style="overflow: hidden">
            <h2 class="titulo-banner mb-0">GANEN O MUERAN</h2>
          </div>
          <div class="linea mt-3"></div>
        </div>
      </header>

      <section class="estadisticas py-5 text-white">
        <div class="container text-center">
          <h3 class="fw-bold mb-4 py-3 titulo">
            La élite del fútbol para personas retiradas o con autismo
          </h3>
          <p class="text-white-50 fs-5 mb-5">Líderes en:</p>

          <div class="row g-4 justify-content-center">
            <div class="col-6 col-md-3">
              <div class="stat-card p-4">
                <h2 class="display-3 fw-bold text-accent">{{ Math.round(stats.lesiones) }}</h2>
                <p class="mb-0 text-white-50">Lesiones acumuladas</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card p-4">
                <h2 class="display-3 fw-bold text-accent">{{ Math.round(stats.inactivos) }}</h2>
                <p class="mb-0 text-white-50">Jugadores inactivos</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card p-4">
                <h2 class="display-3 fw-bold text-accent">{{ Math.round(stats.expulsiones) }}</h2>
                <p class="mb-0 text-white-50">Expulsiones</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card p-4">
                <h2 class="display-3 fw-bold text-accent">{{ Math.round(stats.derrotas) }}</h2>
                <p class="mb-0 text-white-50">Derrotas</p>
              </div>
            </div>
          </div>
        </div>
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
import { onMounted, reactive } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

// Estado reactivo para almacenar los números que se animarán
const stats = reactive({
  lesiones: 0,
  inactivos: 0,
  expulsiones: 0,
  derrotas: 0,
});

onMounted(() => {
  const tl = gsap.timeline();

  // 1. Zoom out suave de la imagen de fondo (Ken Burns)
  gsap.fromTo(".hero-bg", { scale: 1.25 }, { scale: 1, duration: 3, ease: "power2.out" });

  // 2. Revelado del título emergiendo de la máscara (y: 100% a y: 0)
  tl.fromTo(
    ".titulo-banner, .titulo",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 0.2,
    },
  );

  // 3. Expansión de la línea de izquierda a derecha
  tl.fromTo(
    ".linea",
    {
      scaleX: 0,
      transformOrigin: "left", // Expande de izquierda a derecha
    },
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
    },
    "-=0.6", // Se solapa con el final del texto
  );

  // 4. Animación de los contadores con ScrollTrigger
  gsap.to(stats, {
    lesiones: 12,
    inactivos: 7,
    expulsiones: 4,
    derrotas: 15,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".estadisticas",
      start: "top 80%", // Comienza cuando la parte superior de la sección entra al 80% del viewport
      toggleActions: "play none none none",
    },
  });
});
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
  overflow: hidden; /* Evita que el zoom de la imagen se salga del header */
  color: white;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url("@/assets/img/hero.jpg");
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  z-index: 1;
}
.z-2 {
  z-index: 2;
}

.estadisticas {
  background-color: var(--color-primary);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}
.text-accent {
  color: var(--color-accent);
}

.hero-text {
  font-family: "Black Ops One", sans-serif;
  font-size: 3rem;
  font-weight: bold;
}
.btn-reta {
  background-color: #e5b25d;
  border: none;
}
.btn-reta:hover {
  background-color: #d4a04c;
}
</style>
