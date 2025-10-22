// Obtener elementos
const boton = document.getElementById("boton-info");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");
const video = modal.querySelector("video");

// Abrir modal
boton.addEventListener("click", () => {
  modal.style.display = "block";
  video.play(); // inicia el video con audio
});

// Cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause(); // pausa el video al cerrar
  video.currentTime = 0; // reinicia el video
});

// Cerrar si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
});
