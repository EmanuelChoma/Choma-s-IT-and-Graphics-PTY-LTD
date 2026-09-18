document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const form = document.getElementById("quote-form");
  const whatsapp = document.getElementById("whatsapp-quote");
  const status = document.getElementById("form-status");

  if (form && whatsapp) {
    const updateWhatsApp = () => {
      const name = document.getElementById("name")?.value.trim() || "";
      const phone = document.getElementById("phone")?.value.trim() || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value.trim() || "";
      const text = `Hello Choma's IT & Graphics. I would like a quote.%0A%0AName/Business: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(message)}`;
      whatsapp.href = `https://wa.me/27721891872?text=${text}`;
    };

    form.querySelectorAll("input, select, textarea").forEach(field => field.addEventListener("input", updateWhatsApp));
    updateWhatsApp();

    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        status.textContent = "Please complete all required fields.";
        form.reportValidity();
        return;
      }
      status.textContent = "Opening your email application…";
    });
  }
});