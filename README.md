# 🌐 gieovannyfrias.github.io
Youtuber, Influencer , streamer, blogger o creador digital, artista musical y modelo
Este repositorio contiene un sitio web estático publicado en **GitHub Pages** con soporte **offline** gracias a un *Service Worker*.  
Cuando el usuario pierde conexión a internet, se muestra automáticamente una página de fallback (`offline.html`).

---

## 📂 Estructura de archivos

/index.html → Página principal
/offline.html → Página mostrada cuando no hay conexión
/app.js → Registra el Service Worker
/service-worker.js → Lógica de caché y fallback 
/assets/ → (opcional) imágenes, CSS, fuentes

---

## ⚙️ Funcionamiento

1. El usuario abre `index.html`.
2. `app.js` registra el **Service Worker** (`service-worker.js`).
3. El Service Worker cachea los archivos críticos (`index.html`, `offline.html`, `app.js`).
4. Si el usuario pierde internet:
   - Si el recurso está en caché, se sirve desde ahí.
   - Si no está en caché y es una página HTML, se muestra `offline.html`.

---

## 🚀 Cómo probar en GitHub Pages

1. Sube los archivos al repositorio `gieovannyfrias.github.io`.
2. Activa **GitHub Pages** en la configuración del repositorio:  
   - Ve a **Settings → Pages**  
   - Selecciona la rama `main` y carpeta `/root`  
   - Guarda los cambios
3. Accede a tu sitio en:  
4. Abre el sitio en el navegador.
5. Desactiva tu conexión a internet (o usa las DevTools → pestaña *Network* → opción *Offline*).
6. Refresca la página: verás `offline.html`.

---

## 🛠️ Personalización

- Edita `offline.html` para cambiar el mensaje mostrado sin conexión.
- Agrega más archivos a `APP_SHELL` en `service-worker.js` si quieres cachear CSS, imágenes o fuentes.
- Cambia el nombre de caché en `CACHE_NAME` cuando actualices recursos para forzar la recarga.

---

## 📌 Notas importantes

- Los *Service Workers* requieren HTTPS. GitHub Pages ya ofrece HTTPS por defecto.
- El archivo `service-worker.js` debe estar en la raíz del proyecto para cubrir todo el sitio.
- Usa rutas relativas (`./archivo`) en `APP_SHELL` para asegurar compatibilidad en GitHub Pages.
- Si actualizas recursos, cambia el nombre de `CACHE_NAME` (ejemplo: `gieovannyfrias-cache-v2`) para limpiar cachés viejas.

---

## ✍️ Autor

Creado por [Gieovanny Frías](https://github.com/gieovannyfrias)

