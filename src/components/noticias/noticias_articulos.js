document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos para artículos
  const style = document.createElement("style");
  style.textContent = `
    .articulos-section {
      font-family: Arial, sans-serif;
      background-color: #121212;
      color: #e0e0e0;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    }
    .articulos-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: indigo;
    }
    .articulos-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .articulo-card {
      position: relative;
      width: 280px;
      height: 18rem;
      border-radius: 8px;
      overflow: hidden;
      background: #1e1e1e;
      box-shadow: 0 0 1rem rgba(0,0,0,0.7);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .articulo-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 1.5rem rgba(0,0,0,0.9);
    }
    .articulo-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      inset: 0;
      transition: transform 3s ease;
    }
    .articulo-card:hover img { transform: scale(1.2); }
    .articulo-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      z-index: 1;
    }
    .articulo-content {
      position: absolute;
      bottom: 0;
      padding: 1rem;
      color: #fff;
      z-index: 2;
    }
    .articulo-content h2 {
      font-size: 1.2rem;
      margin-bottom: .5rem;
    }
    .articulo-content p {
      font-size: 0.85rem;
      margin: 0;
      color: #ccc;
    }
    @media (max-width: 768px) {
      .articulos-grid { flex-direction: column; align-items: center; }
      .articulo-card { width: 100%; }
    }
  `;
  document.head.appendChild(style);

  // Datos de ejemplo
  const articulos = [
    {
      titulo: "Artículo 1",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 1.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Artículo 2",
      fecha: "2025-11-20T09:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 2.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Artículo 3",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    }
    ,
    {
      titulo: "Artículo 4",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Artículo 5",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Artículo 6",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Artículo 7",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Artículo 8",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve del artículo 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    }
  ];

  // Contenedor
  const contenedor = document.getElementById("articulos_container");
  contenedor.innerHTML = `
    <div class="articulos-section">
      <h1 class="articulos-title">Artículos</h1>
      <div class="articulos-grid"></div>
    </div>
  `;

  const grid = contenedor.querySelector(".articulos-grid");

  // Render dinámico
  grid.innerHTML = articulos.map(a => `
    <a href="${a.enlace}" class="articulo-card">
      <img src="${a.imagen}" alt="${a.titulo}">
      <div class="articulo-gradient"></div>
      <div class="articulo-content">
        <h2>${a.titulo}</h2>
        <p><time datetime="${a.fecha}">${new Date(a.fecha).toLocaleString("es-MX")}</time> | ${a.autor}</p>
        <p>${a.descripcion}</p>
      </div>
    </a>
  `).join("");
});
