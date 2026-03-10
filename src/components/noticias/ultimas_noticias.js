document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos (dark mode moderno con scroll horizontal)
  const style = document.createElement("style");
  style.textContent = `
    #ultimas-container {
      background-color: transparent;
      color: #e0e0e0;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    }
    .title_2 {
      font-size: 2rem;
      color: #ffffff;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
    }
.content-wrapper {
  display: flex;
  flex-direction: row;   /* fila horizontal */
  gap: 20px;
  overflow-x: auto;      /* scroll horizontal visible */
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
}

.content-wrapper::-webkit-scrollbar { height: 8px; }
.content-wrapper::-webkit-scrollbar-thumb {
  background: #007bff;
  border-radius: 4px;
}
.content-wrapper::-webkit-scrollbar-track { background: #222; }

.news-card {
  position: relative;     /* necesario para el texto absoluto */
  flex: 0 0 auto;         /* no se encoge */
  width: 300px;           /* ancho fijo para forzar scroll */
  height: 20rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background: #1e1e1e;
  box-shadow: 0 0 1rem rgba(0,0,0,0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start;
}

    .news-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 1.5rem rgba(0,0,0,0.9);
    }
    .news-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 3s ease;
    }
    .news-card:hover .news-card__image {
      transform: scale(1.2);
    }
    .news-card__text-wrapper {
      position: absolute;
      bottom: 0;
      padding: 1rem;
      color: #fff;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    }
    .news-card__title { margin-bottom: .5rem; font-size: 1.2rem; }
    .news-card__card-link { color: #fff; text-decoration: none; }
    .news-card__card-link:hover { color: #ffcc00; }
    .news-card__post-date { font-size: 0.8rem; color: #bbb; }
    .news-card__excerpt { font-size: 0.9rem; color: #ccc; }
    .news-card__read-more {
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
    .news-card__read-more:hover { background: #ffcc00; color: #000; }

    @media (max-width: 480px) {
  .content-wrapper {
    overflow-x: auto;
  }
  .news-card {
    width: 100%;
  }
}

  `;
  document.head.appendChild(style);

  // Datos de ejemplo
  const noticias = [
    { titulo: "Noticia 1", fecha: "2024-01-29", descripcion: "Descripción breve 1", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Noticia 2", fecha: "2020-01-29", descripcion: "Descripción breve 2", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Noticia 3", fecha: "2016-01-29", descripcion: "Descripción breve 3", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Noticia 4", fecha: "2016-01-29", descripcion: "Descripción breve 3", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Noticia 5", fecha: "2016-01-29", descripcion: "Descripción breve 3", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Noticia 6", fecha: "2016-01-29", descripcion: "Descripción breve 3", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" }
  ];

  // Contenedor
  const contenedor = document.getElementById("ultimas-container");
  contenedor.innerHTML = `
    <h1 class="title_2">Últimas noticias</h1>
    <div class="content-wrapper"></div>
  `;
  const wrapper = contenedor.querySelector(".content-wrapper");

  // Render dinámico
  wrapper.innerHTML = noticias.map(n => `
    <article class="news-card">
      <figure>
        <img src="${n.imagen}" alt="${n.titulo}" class="news-card__image">
        <figcaption class="news-card__text-wrapper">
          <h2 class="news-card__title">
            <a href="${n.enlace}" class="news-card__card-link">${n.titulo}</a>
          </h2>
          <time class="news-card__post-date" datetime="${n.fecha}">
            ${new Date(n.fecha).toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "numeric" })}
          </time>
          <p class="news-card__excerpt">${n.descripcion}</p>
          <a href="${n.enlace}" class="news-card__read-more">Entrar</a>
        </figcaption>
      </figure>
    </article>
  `).join("");
});
