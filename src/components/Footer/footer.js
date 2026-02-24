const footerHTML = `
  <div class="pie-pagina">
    <footer class="footer">
      <!-- Burbujas decorativas -->
      <div class="bubbles">
        ${Array.from({ length: 20 }).map((_, i) => {
          const size = [2, 2.5, 3, 3.5, 4, 4.5, 5][i % 7];
          const position = (i + 1) * 5;
          const time = (2 + (i % 3) * 0.5).toFixed(1);
          const delay = (i * 0.3).toFixed(1);
          const distance = 7 + (i % 5) * 2;
          return `<div class="bubble" style="--size:${size}rem; --position:${position}%; --time:${time}s; --delay:${delay}s; --distance:${distance}rem;"></div>`;
        }).join("")}
      </div>

      <!-- Contenido final -->
      <div class="content-final">
        <div class="container-final">
          <div class="footer__label">
            <h2 class="footer__title">Gieovanny Frias</h2>
            <span class="footer__subtitle">Youtuber, Influencer, Streamer o creador digital</span>
          </div>

          <ul class="footer__links">
            <li class="footer-li">
              <a href="https://www.gieovannyfrias.com/documentacion-proyecto/docs/legales/politicas%20de%20privacidad.pdf" class="footer__link">Políticas de privacidad</a>
            </li>
            <li class="footer-li">
              <a href="https://www.gieovannyfrias.com/documentacion-proyecto/docs/legales/Terminos%20y%20condiciones.pdf" class="footer__link">Términos y condiciones</a>
            </li>
            <li class="footer-li">
              <a href="https://www.gieovannyfrias.com/documentacion-proyecto/docs/legales/politicaCookies.pdf" class="footer__link">Políticas de cookies</a>
            </li>
          </ul>
        </div>

        <!-- Copy final -->
        <div class="footer__copy">
          © <span class="year"></span> Todos los derechos reservados | Gieovanny Frias
        </div>
      </div>
    </footer>
  </div>
`;

// Insertar el footer al final del body
document.body.insertAdjacentHTML("beforeend", footerHTML);
(function addFooterCSS() {

// Insertar estilos directamente desde JS
const style = document.createElement("style");
style.textContent = `
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background-color:transparent; font-family:"Open Sans", sans-serif; }
  .footer__link { text-decoration:none; color:#fff; }
  .footer-li { list-style:none; }
  .pie-pagina { display:grid; grid-template-rows:1fr auto auto; grid-template-areas:"main" "footer"; min-height:100vh; overflow-x:hidden; }
  .pie-pagina .footer { grid-area:footer; background:linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); display:grid; position:relative; z-index:1; }
  .pie-pagina .footer .bubbles { position:absolute; top:0; left:0; right:0; height:6rem; background:inherit; }
  .pie-pagina .footer .bubbles .bubble { position:absolute; left:var(--position,50%); background:inherit; border-radius:50%; animation:bubble-size var(--time,3s) linear infinite var(--delay,0s), bubble-move var(--time,3s) linear infinite var(--delay,0s); transform:translate(-50%,100%); }
  .pie-pagina .footer .content-final { padding:6rem 1rem 2rem; background:inherit; z-index:2; }
  .footer .content-final .container-final { max-width:768px; margin:0 auto; display:grid; grid-template-columns:repeat(2,1fr); gap:1.5rem; color:#fff; }
  .content-final h2 { margin-bottom:.25rem; font-size:2.25rem; }
  .content-final span { font-size:.875rem; }
  .footer__links { list-style:none; display:flex; flex-direction:row; column-gap:2rem; justify-content:center; }
  .footer__links .footer__link { transition:all 150ms ease-out; display:inline-block; }
  .footer__link:after { content:''; display:block; margin:auto; height:2px; width:0; background-color:red; transition:width .25s ease-out; }
  .footer__link:hover:after { width:100%; }
  .footer__copy { background:inherit; font-size:.875rem; text-align:center; color:#dcdcdc; padding:3rem 0 2rem; }
  @keyframes bubble-size { 0%,75% { width:var(--size,4rem); height:var(--size,4rem);} 100% { width:0; height:0;} }
  @keyframes bubble-move { 0% { bottom:-4rem;} 100% { bottom:var(--distance,10rem);} }
  @media only screen and (max-width:600px) {
    .footer .content-final { padding:2rem 1.5rem; }
    .footer .content-final .container-final { grid-template-columns:1fr; }
    .content-final h2 { font-size:1.5rem; }
    .content-final span { font-size:.813rem; }
    .footer__links { flex-direction:column; row-gap:1.5rem; }
  }
  `;
  document.head.appendChild(style);
})();

// JS para insertar el año actual
document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", renderFooter);

