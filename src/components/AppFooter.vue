<template>
  <footer class="text-white">
    <div class="container mt-4">
      <div class="row g-4">
        <!-- Columna 1: Marca y descripción -->
        <div class="col-lg-8 col-md-6">
          <h5 class="fw-bold mb-3 typewriter-container">
            <span class="typewriter-text">{{ displayText }}</span
            ><span class="typewriter-cursor">|</span>
          </h5>
          <div class="linea-foter"></div>
        </div>

        <!-- Columna 3: Contacto / Redes -->
        <div class="col-lg-4 col-md-12">
          <div class="d-flex gap-3 social-links justify-content-lg-end justify-content-center">
            <!-- Facebook -->
            <a
              href="https://facebook.com"
              target="_blank"
              class="social-icon"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg>
            </a>
            <!-- Instagram -->
            <a
              href="https://instagram.com"
              target="_blank"
              class="social-icon"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04 1.572.25 2.74.7 3.19.45.45 1.62.663 3.19.7.853.038 1.126.048 3.297.048 2.17 0 2.443-.01 3.296-.048 1.572-.04 2.74-.25 3.19-.7.45-.45.663-1.62.7-3.19.038-.853.048-1.126.048-3.297 0-2.17-.01-2.443-.048-3.296-.04-1.572-.25-2.74-.7-3.19-.45-.45-1.62-.663-3.19-.7C10.557.01 10.282 0 8.001 0zM12 8.135c-.021 2.227-1.883 4.03-4.088 4.01-2.227-.021-4.03-1.883-4.01-4.088.021-2.227 1.883-4.03 4.088-4.01 2.227.021 4.03 1.883 4.01 4.088zm-5.75.29c-.015 1.122.887 2.04 2.01 2.054 1.122.015 2.04-.887 2.054-2.01a2.037 2.037 0 0 0-2.01-2.054 2.037 2.037 0 0 0-2.054 2.01zm6.75-3.328c0 .41-.33.74-.74.74a.744.744 0 0 1-.74-.74c0-.41.33-.74.74-.74.41 0 .74.33.74.74z"
                />
              </svg>
            </a>
            <!-- X -->
            <a href="https://x.com" target="_blank" class="social-icon" aria-label="X">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
            </a>
            <!-- TikTok -->
            <a href="https://tiktok.com" target="_blank" class="social-icon" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.38 13.84 4 15 4V6c-1.25 0-2.366-.528-3.156-1.363C11.395 5.564 11 6.843 11 8.5c0 3.038-2.462 5.5-5.5 5.5S0 11.538 0 8.5 2.462 3 5.5 3c.48 0 .943.061 1.385.176V5.2A3.481 3.481 0 0 0 5.5 5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5c1.914 0 3.472-1.54 3.499-3.45l.001-8.55z"
                />
              </svg>
            </a>
            <!-- Twitch -->
            <a href="https://twitch.tv" target="_blank" class="social-icon" aria-label="Twitch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H5.143V1.714h8.428v5.715zm-1.143-4.286h-1.143v3.143h1.143V3.143zm-3.143 0H8.143v3.143h1.143V3.143z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Fila de Copyright -->
      <hr class="border-white mt-4 mb-3" />
      <div class="row">
        <div class="col-12 text-center text-white small mb-2">
          &copy; {{ anioActual }} Chuntaro FC. Todos los derechos reservados.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const anioActual = new Date().getFullYear();

const words = ["CHUNTARO FC", "BULLDOGS", "VINOBLANCOS"];
const displayText = ref("");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeWriter = () => {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    displayText.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    displayText.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000; // Pausa al completar la palabra
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500; // Pausa antes de empezar la siguiente
  }

  setTimeout(typeWriter, typingSpeed);
};

onMounted(() => {
  typeWriter();
});
</script>

<style scoped>
.footer-link:hover {
  cursor: pointer;
}

footer {
  background-color: var(--color-primary);
}

.linea-foter {
  width: 85%;
  height: 15px;
  background-color: #fff;
}

/* Animación de máquina de escribir */
.typewriter-container {
  display: inline-flex;
  align-items: center;
  min-height: 1.5em; /* Previene el colapso visual vertical */
  font-size: 40px; /* Tamaño móvil responsivo */
  font-family: "Black Ops One", sans-serif;
}

@media (min-width: 992px) {
  .typewriter-container {
    font-size: 68px; /* Tamaño solicitado en pantallas grandes */
  }
}

.typewriter-cursor {
  font-weight: 400;
  animation: blink 0.7s infinite;
  color: var(--color-accent, #ffffff); /* Un toque dorado premium */
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Redes Sociales */
.social-links {
  margin-top: 10px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-decoration: none;
}

.social-icon:hover {
  background-color: var(--color-accent, #e5b25d);
  color: #1e293b !important;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(229, 178, 93, 0.4);
  border-color: var(--color-accent, #e5b25d);
}
</style>
