<template>
  <div class="row justify-content-center align-items-center" style="min-height: 80vh">
    <div class="col-md-5">
      <div class="card shadow-sm">
        <div class="card-body p-5">
          <h2 class="text-center mb-4">Acceso Administrador</h2>

          <div v-if="error" class="alert alert-danger text-center">
            {{ error }}
          </div>

          <form @submit.prevent="iniciarSesion">
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="form.password"
                required
              />
            </div>
            <button type="submit" class="btn btn-dark w-100" :disabled="cargando">
              {{ cargando ? "Conectando..." : "Entrar al Panel" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

// Variables reactivas
const form = ref({
  email: "",
  password: "",
});
const error = ref(null);
const cargando = ref(false);

// Función para manejar el formulario
const iniciarSesion = async () => {
  error.value = null;
  cargando.value = true;

  try {
    // 1. Pedir la cookie de protección CSRF a Sanctum
    await axios.get("/sanctum/csrf-cookie");

    // 2. Enviar las credenciales al endpoint de login
    await axios.post("/login", form.value);

    // 3. Si todo sale bien, redirigir al admin (que crearemos después)
    router.push("/dashboard");
  } catch (err) {
    if (err.response && err.response.status === 422) {
      error.value = "Las credenciales no coinciden con nuestros registros.";
    } else {
      error.value = "Ocurrió un error al intentar conectarse al servidor.";
    }
  } finally {
    cargando.value = false;
  }
};
</script>
