import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/main.css";
import axios from "axios";

// Configuración global de Axios para Laravel Sanctum
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true; // <--- ¡AGREGA ESTA LÍNEA!
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.common["Accept"] = "application/json";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
