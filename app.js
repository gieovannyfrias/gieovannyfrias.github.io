if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js') // usa ruta relativa
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.error('SW registro falló:', err));
  });
}
