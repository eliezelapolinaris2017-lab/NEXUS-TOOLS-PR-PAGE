// app.js — Suite Nexus Landing

document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // WhatsApp rápido
  const phone = "17870000000"; // <-- CAMBIA ESTE NÚMERO POR TU WHATSAPP REAL
  const defaultText =
    "Hola, me interesa la familia Nexus (Nexus Salon, Nexus Auto Pro 2026, Nexus Barber Shop, Nexus Zone 0 y Nex-Invoice) para mi negocio.";

  function openWhatsApp() {
    const url =
      "https://wa.me/" +
      phone +
      "?text=" +
      encodeURIComponent(defaultText);
    window.open(url, "_blank");
  }

  const btnWhatsapp = document.getElementById("btn-whatsapp");
  const waLink = document.getElementById("wa-link");

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp();
    });
  }

  if (waLink) {
    waLink.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp();
    });
  }

  // Demo de envío del formulario (solo front-end)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Gracias por tu interés en la familia Nexus. " +
          "Este formulario es una demo frontal. " +
          "Conecta el envío real con Firebase o Apps Script."
      );
      form.reset();
    });
  }
});
