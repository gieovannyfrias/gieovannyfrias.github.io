// footer.js moderno 2026

// Renderizar Footer dinámicamente
function renderFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer-modern");
  footer.innerHTML = `
    <div class="footer-container">
      <!-- Logo / Nombre -->
      <div class="footer-logo">
        <h2>Noticias 2026</h2>
        <p>Tu portal de información actualizada</p>
      </div>

      <!-- Enlaces rápidos -->
      <div class="footer-links">
        <h3>Enlaces rápidos</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#acerca">Acerca de</a></li>
          <li><a href="#categorias">Categorías</a></li>
          <li><a href="#opinion">Opinión</a></li>
          <li><a href="#multimedia">Multimedia</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div class="footer-social">
        <h3>Síguenos</h3>
        <div class="social-icons">
          <a href="#">🌐 Facebook</a>
          <a href="#">🐦 Twitter/X</a>
          <a href="#">📸 Instagram</a>
          <a href="#">▶️ YouTube</a>
        </div>
      </div>

      <!-- Sección Legal -->
      <div class="footer-legal">
        <h3>Información Legal</h3>
        <ul>
          <li><a href="#">Política de Privacidad</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Aviso de Privacidad</a></li>
          <li><a href="#">Política de Cookies</a></li>
          <li><a href="#">Accesibilidad</a></li>
        </ul>
      </div>
    </div>

    <!-- Derechos -->
    <div class="footer-bottom">
      <p>© 2026 Noticias. Todos los derechos reservados.</p>
    </div>
  `;
  document.body.appendChild(footer);
}

// Inyectar CSS dinámicamente
(function addFooterCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
.footer-modern {
  width: 100%;
  background: linear-gradient(135deg, #1e1e2f, #0d0d1a);
  color: #fff;
  padding: 40px 20px;
  margin-top: 40px;
  border-top: 3px solid #ff1e1e;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo h2 {
  font-size: 1.6rem;
  background: linear-gradient(90deg, #ff1e1e, #ffd700, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-links h3,
.footer-social h3,
.footer-legal h3 {
  margin-bottom: 12px;
  font-size: 1.2rem;
  color: #ffd700;
}

.footer-links ul, .footer-legal ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li, .footer-legal ul li {
  margin-bottom: 8px;
}

.footer-links ul li a, .footer-legal ul li a {
  text-decoration: none;
  color: #ddd;
  transition: color 0.3s ease;
}

.footer-links ul li a:hover, .footer-legal ul li a:hover {
  color: #ff1e1e;
}

.social-icons a {
  display: inline-block;
  margin-right: 12px;
  text-decoration: none;
  color: #ddd;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ffd700;
}

.footer-legal {
  margin-top: 30px;
  text-align: center;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 0.9rem;
  color: #aaa;
}

/* 📱 Adaptación a móviles */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-links ul li, .footer-legal ul li {
    margin-bottom: 12px;
  }
  .social-icons a {
    display: block;
    margin: 8px 0;
  }
}
  `;
  document.head.appendChild(style);
})();

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", renderFooter);
