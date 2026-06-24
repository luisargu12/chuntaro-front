<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>🎮 Torneo Express (Retas Rápidas)</h2>
      <router-link to="/" class="btn btn-outline-secondary">Volver al Inicio</router-link>
    </div>

    <div class="row">
      <!-- Columna Izquierda: Registro de Jugadores -->
      <div class="col-md-5 mb-4">
        <div class="card shadow-sm">
          <div class="card-header bg-dark text-white">
            <h5 class="mb-0">1. Agrega a los Jugadores</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="agregarJugador" class="d-flex gap-2 mb-3">
              <input
                type="text"
                class="form-control"
                v-model="nuevoJugador"
                placeholder="Nombre del jugador..."
                required
              />
              <button type="submit" class="btn btn-primary">Agregar</button>
            </form>

            <ul class="list-group mb-3">
              <li
                v-for="(jugador, index) in jugadores"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ jugador }}
                <button @click="eliminarJugador(index)" class="btn btn-sm btn-danger">X</button>
              </li>
            </ul>

            <div class="d-grid" v-if="jugadores.length >= 2">
              <button @click="generarLlaves" class="btn btn-success btn-lg">
                🎲 Revolver y Generar Llaves
              </button>
            </div>
            <div v-else class="text-muted text-center small mt-2">
              Agrega al menos 2 jugadores para generar el torneo.
            </div>
          </div>
        </div>
      </div>

      <!-- Columna Derecha: Las Llaves Generadas -->
      <div class="col-md-7">
        <div class="card shadow-sm border-0 bg-light h-100">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">🏆 Enfrentamientos</h4>

            <div v-if="enfrentamientos.length === 0" class="text-center text-muted mt-5">
              <p>Aquí aparecerán los partidos una vez que generes las llaves.</p>
            </div>

            <div class="row g-3">
              <div class="col-12" v-for="(partido, index) in enfrentamientos" :key="index">
                <div class="card border-primary">
                  <div
                    class="card-body text-center d-flex justify-content-between align-items-center p-3"
                  >
                    <h5 class="mb-0 w-100 text-end text-primary">{{ partido[0] }}</h5>
                    <span class="mx-3 badge bg-dark px-3 py-2">VS</span>
                    <h5
                      class="mb-0 w-100 text-start"
                      :class="{
                        'text-danger': partido[1] === 'BYE (Pasa directo)',
                        'text-primary': partido[1] !== 'BYE (Pasa directo)',
                      }"
                    >
                      {{ partido[1] }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Variables reactivas
const nuevoJugador = ref("");
const jugadores = ref([]);
const enfrentamientos = ref([]);

// Funciones
const agregarJugador = () => {
  const nombre = nuevoJugador.value.trim();
  if (nombre !== "" && !jugadores.value.includes(nombre)) {
    jugadores.value.push(nombre);
    nuevoJugador.value = "";
    enfrentamientos.value = []; // Borrar llaves viejas si agregan a alguien nuevo
  }
};

const eliminarJugador = (index) => {
  jugadores.value.splice(index, 1);
  enfrentamientos.value = [];
};

const generarLlaves = () => {
  // 1. Copiar y mezclar (shuffle) el arreglo de jugadores al azar
  let mezclados = [...jugadores.value].sort(() => Math.random() - 0.5);
  enfrentamientos.value = [];

  // 2. Emparejarlos de 2 en 2
  for (let i = 0; i < mezclados.length; i += 2) {
    if (mezclados[i + 1]) {
      // Si hay un oponente, los enfrentamos
      enfrentamientos.value.push([mezclados[i], mezclados[i + 1]]);
    } else {
      // Si sobra uno (número impar), le damos un BYE
      enfrentamientos.value.push([mezclados[i], "BYE (Pasa directo)"]);
    }
  }
};
</script>

<style scoped>
.list-group-item {
  font-weight: 500;
}
</style>
