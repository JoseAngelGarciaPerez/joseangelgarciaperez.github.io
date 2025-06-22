const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

async function loadPage(page) {
  content.classList.add("hidden");

  // Espera la animación de salida antes de cambiar el HTML (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  try {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();
    content.innerHTML = html;
    
    setTimeout(() => {
      
      content.classList.remove("hidden");
    }, 10);
  } catch (err) {
    content.innerHTML = "<h2>Error al cargar la página</h2><p>No se pudo cargar la página</p>";
    content.classList.remove("hidden");
  }
}

// Carga inicial
loadPage("home");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    links.forEach(l => l.classList.remove("active"));
    e.target.classList.add("active");

    const page = e.target.getAttribute("data-page");
    loadPage(page);
  });
});
