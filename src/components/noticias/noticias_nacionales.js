document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos
  const style = document.createElement("style");
  style.textContent = `
    .noticies_new {
      font-family: Arial, sans-serif;
    }
    .container_1 {
      margin: 0 auto;
      padding: 16px;
    }
    .title_10 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 32px;
      text-align: center;
      color: indigo;
    }
    .title_11 { color: white; }
    .hero {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    @media (min-width: 768px) {
      .hero {
        flex-direction: row;
        height: 24rem;
      }
    }
    @media only screen and (min-width:320px) and (max-width:767px){
      .hero { height: 300vh; }
    }
    .column {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }
    .card_1 {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      flex: 1;
    }
    .card_1 .img_01 {
      width: 100%;
      height: 200px;
      object-fit: cover;
      position: absolute;
      inset: 0;
    }
    @media only screen and (min-width:320px) and (max-width:767px){
      .card_1 .img_01 { height: 300px; }
    }
    .gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      z-index: 1;
    }
    .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      color: white;
      z-index: 2;
    }
    .card-content .title_11 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0 0 8px;
    }
    .card-content .paragraph_1 {
      font-size: 0.8rem;
      margin: 0;
    }
    .big-card h2 { font-size: 1.5rem; }
  `;
  document.head.appendChild(style);

  // Datos de ejemplo
  const noticiaPrincipal = {
    titulo: "Noticia nacional destacada",
    fecha: "2025-11-20T09:00:00-06:00",
    autor: "Gieovanny Frías",
    descripcion: "Resumen breve de la noticia nacional principal.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
    enlace: "https://www.gieovannyfrias.com/Compat"
  };

  const noticiasLaterales = [
    {
      titulo: "Noticia lateral 1",
      fecha: "2025-12-06T15:45:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve de la noticia lateral 1.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia lateral 2",
      fecha: "2025-12-02T10:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve de la noticia lateral 2.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia lateral 3",
      fecha: "2025-11-02T08:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve de la noticia lateral 3.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    },
    {
      titulo: "Noticia lateral 4",
      fecha: "2025-12-02T07:00:00-06:00",
      autor: "Gieovanny Frías",
      descripcion: "Resumen breve de la noticia lateral 4.",
      imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000",
      enlace: "https://www.gieovannyfrias.com/Compat"
    }
  ];

  // Contenedor
  const contenedor = document.getElementById("nacionales_container");
  contenedor.innerHTML = `
    <div class="noticies_new">
      <div class="container_1">
        <h1 class="title_10">Noticias nacionales</h1>
        <div class="hero">
          <div class="column" id="columna-izquierda"></div>
          <a href="${noticiaPrincipal.enlace}" class="card_1 big-card" style="flex:2">
            <img class="img_01" src="${noticiaPrincipal.imagen}" alt="${noticiaPrincipal.titulo}">
            <div class="gradient"></div>
            <div class="card-content">
              <h2 class="title_11">${noticiaPrincipal.titulo}</h2>
              <p class="paragraph_1">
                <time datetime="${noticiaPrincipal.fecha}">${new Date(noticiaPrincipal.fecha).toLocaleString("es-MX")}</time> | ${noticiaPrincipal.autor}
              </p>
              <p style="font-size:0.9rem; color:#ccc;">${noticiaPrincipal.descripcion}</p>
            </div>
          </a>
          <div class="column" id="columna-derecha"></div>
        </div>
      </div>
    </div>
  `;

  // Render dinámico de columnas laterales
  const colIzq = contenedor.querySelector("#columna-izquierda");
  const colDer = contenedor.querySelector("#columna-derecha");

  // Divide las noticias laterales en dos columnas
  const mitad = Math.ceil(noticiasLaterales.length / 2);
  const izqNoticias = noticiasLaterales.slice(0, mitad);
  const derNoticias = noticiasLaterales.slice(mitad);

  colIzq.innerHTML = izqNoticias.map(n => `
    <a href="${n.enlace}" class="card_1">
      <img class="img_01" src="${n.imagen}" alt="${n.titulo}">
      <div class="gradient"></div>
      <div class="card-content">
        <h2 class="title_11">${n.titulo}</h2>
        <p class="paragraph_1">
          <time datetime="${n.fecha}">${new Date(n.fecha).toLocaleString("es-MX")}</time> | ${n.autor}
        </p>
        <p style="font-size:0.8rem; color:#ccc;">${n.descripcion}</p>
      </div>
    </a>
  `).join("");

  colDer.innerHTML = derNoticias.map(n => `
    <a href="${n.enlace}" class="card_1">
      <img class="img_01" src="${n.imagen}" alt="${n.titulo}">
      <div class="gradient"></div>
      <div class="card-content">
        <h2 class="title_11">${n.titulo}</h2>
        <p class="paragraph_1">
          <time datetime="${n.fecha}">${new Date(n.fecha).toLocaleString("es-MX")}</time> | ${n.autor}
        </p>
        <p style="font-size:0.8rem; color:#ccc;">${n.descripcion}</p>
      </div>
    </a>
  `).join("");
});
