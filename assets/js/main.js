// Importa el PDF handler
import "./components/pdf.js";

document.addEventListener("DOMContentLoaded", () => {
  // Cambio de idioma
  const languageToggle = document.getElementById("language-toggle");

  function changeLanguage(lang) {
    document.querySelectorAll("[data-lang-es]").forEach((el) => {
      el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
  }

  // Estado inicial es el espanol
  changeLanguage("es");

  // Escucha el toggle para hacer el cambio de idioma
  languageToggle.addEventListener("change", () => {
    const lang = languageToggle.checked ? "en" : "es";
    changeLanguage(lang);
  });
});
