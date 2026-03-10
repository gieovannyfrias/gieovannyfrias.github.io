document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos
  const style = document.createElement("style");
  style.textContent = `
.videos {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}

.videos h3 { margin-bottom: 10px; }

.video-list {
  display: flex;
  flex-direction: column;   /* apilar verticalmente */
  gap: 15px;
  max-height: 1000px;        /* altura máxima */
  overflow-y: auto;         /* scroll vertical visible */
  padding-right: 10px;
}

.video-list::-webkit-scrollbar { width: 10px; }
.video-list::-webkit-scrollbar-thumb {
  background: #007bff;
  border-radius: 4px;
}
.video-list::-webkit-scrollbar-track { background: #eee; }


.video-item {
  flex: 0 0 auto;          /* no se encoge */
  width: 450px;            /* ancho fijo para forzar scroll */
  scroll-snap-align: start;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.video-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.video-item iframe {
  width: 100%;
  height: 180px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.video-item h4 {
  margin: 8px 0;
  font-size: 16px;
  color: white;
}

.video-item p {
  font-size: 13px;
  color: white;
  margin-bottom: 12px;
}

.btn-video {
  display: inline-block;
  padding: 6px 12px;
  background: linear-gradient(45deg, #007bff, #00c6ff);
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;
  transition: background 0.3s ease;
}
.btn-video:hover {
  background: linear-gradient(45deg, #0056b3, #0099cc);
}

    /* 📱 Ajustes para móviles */
    @media (max-width: 768px) {
      .video-item iframe {
        height: 180px;
      }
      .video-item h4 {
        font-size: 16px;
      }
      .video-item p {
        font-size: 13px;
      }
    }
@media (max-width: 480px) {
  .video-list {
    flex-direction: column;   /* apilar verticalmente en móviles */
    overflow-x: hidden;
    overflow-y: auto;         /* scroll vertical visible */
    max-height: 500px;
  }
  .video-item {
    width: 100%;              /* ocupar todo el ancho */
  }
}

/* 📱 Ajustes para móviles */
@media (max-width: 768px) {
  .video-item {
    width: 100%;   /* más estrecho en tablets */
  }
  .video-item iframe {
    height: 160px;
  }
}

@media (max-width: 480px) {
  .video-list {
    flex-direction: column; /* apilar verticalmente en móviles pequeños */
    overflow-x: hidden;
    overflow-y: auto;
  }
  .video-item {
    width: 100%;   /* ocupar todo el ancho */
  }
  .video-item iframe {
    height: 200px;
  }
}
  `;
  document.head.appendChild(style);

  // Datos de videos
  const videos = [
    { titulo: "Título del Video 1", descripcion: "Descripción breve del primer video.", enlace: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { titulo: "Título del Video 2", descripcion: "Descripción breve del segundo video.", enlace: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    { titulo: "Título del Video 2", descripcion: "Descripción breve del segundo video.", enlace: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    { titulo: "Título del Video 2", descripcion: "Descripción breve del segundo video.", enlace: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    { titulo: "Título del Video 3", descripcion: "Descripción breve del tercer video.", enlace: "https://www.youtube.com/embed/ysz5S6PUM-U" }
  ];

  // Selecciona el contenedor ya existente en tu HTML
  const contenedor = document.getElementById("videos-container");

  // Inyecta el bloque dentro de ese contenedor
  contenedor.innerHTML = `
    <h3>Videos</h3>
    <div class="video-list"></div>
  `;

  const videoList = contenedor.querySelector(".video-list");

  // Render dinámico
  videoList.innerHTML = videos.map(v => `
    <div class="video-item">
      <iframe src="${v.enlace}" frameborder="0" allowfullscreen></iframe>
      <h4>${v.titulo}</h4>
      <p>${v.descripcion}</p>
      <a href="#" class="btn-video">Más información</a>
    </div>
  `).join("");
});
