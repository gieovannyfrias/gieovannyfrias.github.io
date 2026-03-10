document.addEventListener("DOMContentLoaded", () => {
  // Estilos dinámicos
  const style = document.createElement("style");
  style.textContent = `
    .tendencias {
      margin-bottom: 20px;
      font-family: Arial, sans-serif;
      max-height: 800px;
      overflow-y: auto;        /* scroll vertical */
    }
    .tendencias h3 { 
margin-bottom: 10px;
}
    .trend-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      scroll-snap-type: y mandatory;
      padding-bottom: 10px;
    }
    .trend-item {
      flex: 0 0 auto;
      scroll-snap-align: start;
background-color: #1e1e1e;
border-radius: 10px;
      padding: 15px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: white;
    }
    .trend-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }

    .trend-item img {
      width: 100%;
height: 150px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .btn-info {
      display: inline-block;
      padding: 6px 12px;
      background: linear-gradient(45deg, #ff3b3b, #ff7f50);
      color: #fff;
      text-decoration: none;
      border-radius: 20px;
      font-weight: bold;
      font-size: 12px;
      transition: background 0.3s ease;
    }
    .btn-info:hover {
      background: linear-gradient(45deg, #cc2b2b, #e65c00);
    }
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
  .tendencias {
overflow-x: auto;
}
  .trend-item {
    padding: 10px;
  }
  .trend-item img {
        width: 100%;
        height: 120px;
}
  .trend-item h4 {
    font-size: 14px;
  }
  .trend-item p {
    font-size: 12px;
  }
  .btn-info {
    font-size: 11px;
    padding: 5px 10px;
  }
}

@media (max-width: 480px) {
  .trend-list {
    gap: 10px;
  }
  .trend-item {
    padding: 8px;
  }
  .trend-item img {
    height: 100px;
  }
  .trend-item h4 {
    font-size: 13px;
  }
  .trend-item p {
    font-size: 11px;
  }
}
  `;
  document.head.appendChild(style);

  // Datos de tendencias
  const tendencias = [
    { titulo: "Tendencia 1", descripcion: "Descripción breve de la primera tendencia.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Tendencia 2", descripcion: "Descripción breve de la segunda tendencia.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Tendencia 3", descripcion: "Descripción breve de la tercera tendencia.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Tendencia 4", descripcion: "Otra tendencia adicional.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Tendencia 5", descripcion: "Otra tendencia adicional.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
    { titulo: "Tendencia 6", descripcion: "Otra tendencia adicional.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" },
      { titulo: "Tendencia 7", descripcion: "Otra tendencia adicional.", imagen: "https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000", enlace: "#" }
  ];

  // Selecciona el contenedor ya existente en tu HTML
  const tendenciasDiv = document.getElementById("tendencias-container");

  // Inyecta el bloque dentro de ese contenedor
  tendenciasDiv.className = "tendencias";
  tendenciasDiv.innerHTML = `
    <h3>Tendencias</h3>
    <div class="trend-list"></div>
    <div id="imgModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="modalImg">
    </div>
  `;

  const trendList = tendenciasDiv.querySelector(".trend-list");

  // Render dinámico
  trendList.innerHTML = tendencias.map(t => `
    <div class="trend-item">
      <img src="${t.imagen}" alt="${t.titulo}">
      <h4>${t.titulo}</h4>
      <p>${t.descripcion}</p>
      <a href="${t.enlace}" class="btn-info">Más información</a>
    </div>
  `).join("");

  // Lógica del modal
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");

  trendList.addEventListener("click", (e) => {
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
