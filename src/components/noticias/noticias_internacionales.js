document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos
  const style = document.createElement("style");
  style.textContent = `
    .cont_2 {
      background-color: #121212;
      color: #e0e0e0;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    }
    .title_1 {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
    }
    .flex {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .main-article {
      position: relative;
      flex: 2;
      min-width: 300px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 0 1rem rgba(0,0,0,0.7);
      transition: transform 0.3s ease;
    }
    .main-article:hover { transform: translateY(-5px); }
    .img_11 {
      width: 100%;
      height: 700px;
      object-fit: cover;
    }
    .gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    }
    .main-text {
      position: absolute;
      bottom: 0;
      padding: 1rem;
      color: #fff;
    }
    .title_21 { font-size: 1.5rem; margin-bottom: .5rem; }
    .sidebar_0 {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow-y: auto;
      max-height: 700px;
      padding-right: 10px;
    }
    .sidebar_0::-webkit-scrollbar { width: 8px; }
    .sidebar_0::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
    .sidebar_0::-webkit-scrollbar-track { background: #222; }
    .sidebar_0 a {
      display: flex;
      gap: 10px;
      background: #1e1e1e;
      border-radius: 8px;
      padding: 10px;
      text-decoration: none;
      color: #fff;
      transition: background 0.3s ease;
    }
    .sidebar_0 a:hover { background: #333; }
    .img_1 {
      width: 80px;
      height: 60px;
      object-fit: cover;
      border-radius: 6px;
    }
    .title_22 { font-size: 1rem; margin: 0; }
    @media (max-width: 768px) {
      .flex { flex-direction: column; }
      .sidebar_0 { max-height: none; overflow-y: visible; }
    }
  `;
  document.head.appendChild(style);

  // Datos de ejemplo
  const noticiaPrincipal = {
    titulo: "Artículo principal internacional",
    fecha: "2025-12-02T10:00:00-06:00",
    autor: "Gieovanny Frías",
    imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
    enlace: "https://www.gieovannyfrias.com/Compat"
  };

  const sidebarNoticias = [
    {
      titulo: "Noticia secundaria 1",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-02T10:00:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 2",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-11-02T08:00:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia secundaria 3",
          descripcion: "Resumen breve de la noticia secundaria 3.",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    }
  ];

  // Contenedor
  const contenedor = document.querySelector(".container_2");
contenedor.innerHTML = `
  <h1 class="title_1">Noticias internacionales</h1>
  <div class="flex">
    <a href="${noticiaPrincipal.enlace}" class="main-article">
      <img class="img_11" src="${noticiaPrincipal.imagen}" alt="${noticiaPrincipal.titulo}">
      <div class="gradient"></div>
      <div class="main-text">
        <h2 class="title_21">${noticiaPrincipal.titulo}</h2>
        <p style="font-size:0.8rem;">
          ${new Date(noticiaPrincipal.fecha).toLocaleString("es-MX")} | ${noticiaPrincipal.autor}
        </p>
        <p style="font-size:0.9rem; color:#ccc; margin-top:0.5rem;">
          ${noticiaPrincipal.descripcion}
        </p>
      </div>
    </a>
    <div class="sidebar_0"></div>
  </div>
`;
  // Render dinámico de la barra lateral
const sidebar = contenedor.querySelector(".sidebar_0");
sidebar.innerHTML = sidebarNoticias.map(n => `
  <a href="${n.enlace}">
    <img class="img_1" src="${n.imagen}" alt="${n.titulo}">
    <div>
      <h3 class="title_22">${n.titulo}</h3>
      <p style="font-size:0.8rem;">
        <time datetime="${n.fecha}">${new Date(n.fecha).toLocaleString("es-MX")}</time> | ${n.autor}
      </p>
      <p style="font-size:0.75rem; color:#ccc;">${n.descripcion}</p>
    </div>
  </a>
`).join("");
});
