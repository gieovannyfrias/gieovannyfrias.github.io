document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos para noticias destacadas
  const style = document.createElement("style");
  style.textContent = `
    #destacadas-container {
      background-color: transparent;
      color: #e0e0e0;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    }
    .title_destacadas {
      font-size: 2rem;
      color: #ffffff;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
    }
    .destacadas-wrapper {
      display: flex;
      flex-direction: row;
      gap: 20px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
    }
    .destacadas-wrapper::-webkit-scrollbar { height: 8px; }
    .destacadas-wrapper::-webkit-scrollbar-thumb {
      background: #444;
      border-radius: 4px;
    }
    .destacadas-wrapper::-webkit-scrollbar-track { background: #222; }

    .destacada-card {
      position: relative;
      flex: 0 0 auto;
      width: 300px;
      height: 20rem;
      overflow: hidden;
      border-radius: 0.8rem;
      background: #1e1e1e;
      box-shadow: 0 0 1rem rgba(0,0,0,0.7);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      scroll-snap-align: start;
    }
    .destacada-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 1.5rem rgba(0,0,0,0.9);
    }
    .destacada-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 3s ease;
    }
    .destacada-card:hover img {
      transform: scale(1.2);
    }
    .destacada-text {
      position: absolute;
      bottom: 0;
      padding: 1rem;
      color: #fff;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    }
    .destacada-text h2 { margin-bottom: .5rem; font-size: 1.2rem; }
    .destacada-text a { color: #fff; text-decoration: none; }
    .destacada-text a:hover { color: #ffcc00; }
    .destacada-text time { font-size: 0.8rem; color: #bbb; }
    .destacada-text p { font-size: 0.9rem; color: #ccc; }
    .btn-destacada {
      background: #000;
      color: #ffcc00;
      display: inline-block;
      padding: 0.4rem 0.8rem;
      border-radius: 0.3rem;
      margin-top: 1rem;
      border: 1px solid #444;
      font-size: 0.85rem;
      text-decoration: none;
      transition: background 0.3s ease, color 0.3s ease;
    }
    .btn-destacada:hover { background: #ffcc00; color: #000; }

    @media (max-width: 480px) {
      .destacadas-wrapper {
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .destacada-card {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);

  // Datos de ejemplo
  const noticiasDestacadas = [
    {
      titulo: "Noticia destacada 1",
      fecha: "2025-12-01",
      descripcion: "Resumen breve de la noticia destacada 1.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 2",
      fecha: "2025-11-15",
      descripcion: "Resumen breve de la noticia destacada 2.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 3",
      fecha: "2025-10-20",
      descripcion: "Resumen breve de la noticia destacada 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 3",
      fecha: "2025-10-20",
      descripcion: "Resumen breve de la noticia destacada 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 3",
      fecha: "2025-10-20",
      descripcion: "Resumen breve de la noticia destacada 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 3",
      fecha: "2025-10-20",
      descripcion: "Resumen breve de la noticia destacada 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 3",
      fecha: "2025-10-20",
      descripcion: "Resumen breve de la noticia destacada 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    },
    {
      titulo: "Noticia destacada 3",
      fecha: "2025-10-20",
      descripcion: "Resumen breve de la noticia destacada 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "#"
    }
  ];

  // Contenedor
  const contenedor = document.getElementById("destacadas-container");
  contenedor.innerHTML = `
    <h1 class="title_destacadas">Noticias destacadas</h1>
    <div class="destacadas-wrapper"></div>
  `;
  const wrapper = contenedor.querySelector(".destacadas-wrapper");

  // Render dinámico
  wrapper.innerHTML = noticiasDestacadas.map(n => `
    <article class="destacada-card">
      <img src="${n.imagen}" alt="${n.titulo}">
      <div class="destacada-text">
        <h2><a href="${n.enlace}">${n.titulo}</a></h2>
        <time datetime="${n.fecha}">
          ${new Date(n.fecha).toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "numeric" })}
        </time>
        <p>${n.descripcion}</p>
        <a href="${n.enlace}" class="btn-destacada">Leer más</a>
      </div>
    </article>
  `).join("");
});
