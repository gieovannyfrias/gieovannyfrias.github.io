document.addEventListener("DOMContentLoaded", () => {
  // Estilos
  const style = document.createElement("style");
  style.textContent = `
.related-news {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  overflow-x: auto;       /* activa scroll horizontal */
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  white-space: nowrap;    /* evita que se acomoden en varias filas */
}

.related-news::-webkit-scrollbar { height: 10px; }   /* altura de la barra */
.related-news::-webkit-scrollbar-thumb {
  background: #007bff;    /* color visible */
  border-radius: 4px;
}
.related-news::-webkit-scrollbar-track { background: ##222; }

.news-item {
  flex: 0 0 auto;         /* no se encoge */
  width: 250px;           /* ancho fijo */
  scroll-snap-align: start;
  background: #1e1e1e;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

   .news-item {
      color: white
    }
.news-item img {
  max-width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, filter 0.3s;
}
.news-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  filter: brightness(1.1) contrast(1.05);
}
.news-item h4 { margin: 10px 0 5px; }

.btn-modern {
  display: inline-block;
  padding: 8px 14px;
  background: linear-gradient(45deg, #007bff, #00c6ff);
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  transition: 0.3s;
}
.btn-modern:hover {
  background: linear-gradient(45deg, #0056b3, #0099cc);
}
.btn-modern{
      font-size: 10px;
    }
/* Contenedor flotante a la derecha en escritorio */
.post-right {
  float: right;
  width: 35%;
}

/* Modal */

    .modal {
      display: none;
      position: fixed;
      z-index: 999;
      padding-top: 60px;
      left: 0; top: 0;
      width: 100%; height: 100%;
      background-color: rgba(0,0,0,0.8);
    }
    .modal-content {
      margin: auto;
      display: block;
      max-width: 80%;
      border-radius: 12px;
      animation: fadeIn 0.5s;
    }
    .close {
      position: absolute;
      top: 20px; right: 35px;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
    }
    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
/* 📱 Ajustes para móviles */
@media (max-width: 768px) {
  .post-right {
    float: none;       /* quitar el float */
    width: 100%;       /* ocupar todo el ancho */
    margin-top: 20px;
  }
  .related-news {
    overflow-x: scroll; /* mantener scroll horizontal */
    gap: 10px;
  }
  .news-item {
    width: 100%;       /* tarjetas más estrechas */
  }
.news-item img {
    height: 400px;
    width: 100%;
}
}

@media (max-width: 480px) {
  .related-news {
    overflow-x: auto;
  }
  .news-item {
    width: 100%;        /* ocupar todo el ancho */
  }

}

  `;
  document.head.appendChild(style);

  // Datos de noticias
  const noticias = [
    { titulo: "Avances en Inteligencia Artificial", descripcion: "Nueva tecnología revoluciona el sector salud.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Descubrimiento Espacial", descripcion: "Astrónomos detectan un planeta similar a la Tierra.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Economía Global", descripcion: "Los mercados muestran señales de recuperación.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Deportes Internacionales", descripcion: "Un equipo latinoamericano sorprende en el mundial.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Cultura y Arte", descripcion: "Exposición de arte contemporáneo atrae multitudes.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Cultura y Arte", descripcion: "Exposición de arte contemporáneo atrae multitudes.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Cultura y Arte", descripcion: "Exposición de arte contemporáneo atrae multitudes.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Tecnología Verde", descripcion: "Nuevos paneles solares más eficientes llegan al mercado.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" }
  ];

  // Selecciona el contenedor ya existente en tu HTML
  const contenedor = document.getElementById("noticias-container");

  // Inyecta el bloque dentro de ese contenedor
  contenedor.innerHTML = `
    <h3>Noticias relacionadas</h3>
    <div class="related-news"></div>
    <div id="imgModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="modalImg">
    </div>
  `;

  const relatedNews = contenedor.querySelector(".related-news");

  // Render dinámico
  relatedNews.innerHTML = noticias.map(n => `
    <div class="news-item">
      <img src="${n.imagen}" alt="${n.titulo}">
      <h4>${n.titulo}</h4>
      <p>${n.descripcion}</p>
      <a href="${n.enlace}" class="btn-modern">Leer más</a>
    </div>
  `).join("");

  // Lógica del modal
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");

  relatedNews.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      modal.style.display = "block";
      modalImg.src = e.target.src;
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
