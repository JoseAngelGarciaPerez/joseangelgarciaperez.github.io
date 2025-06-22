const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

async function loadPage(page) {
  content.classList.add("hidden");

  try {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();

    setTimeout(() => {
      content.innerHTML = html;
      content.classList.remove("hidden");
    }, 300);
  } catch (err) {
    content.innerHTML = "<p>Error al cargar la página.</p>";
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
