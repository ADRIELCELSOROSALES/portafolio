# Portafolio (Adriel Rosales)
Sitio estático de una sola página. Contenido y `lang` en español.

## Stack
- HTML5 + CSS + JS vanilla (ES modules). Sin package.json, sin build, sin tests, sin CI.
- Fuente: Google Fonts "Schibsted Grotesk" (400–700).
- Deploy: lo decide el usuario (nunca desplegar ni hacer push).

## Comandos
- Dev: `python3 -m http.server 8765` en la raíz → http://127.0.0.1:8765/
  (los módulos ES no cargan con file://, hace falta servidor).
- Build / Tests / Lint: no existen.

## Módulos
- `index.html`: head, markup y links. Sin CSS/JS inline. Proyectos en markup (SEO).
- `css/` (orden de carga): `tokens` (variables) → `base` → `layout` → `components`
  → `animations` (incluye reduced-motion y spotlight; va al final por la cascada).
- `js/`: `main.js` (entrada) + `spotlight`, `tilt`, `reveal`, `scroll`, `contact`,
  `motion` (helpers). Cada módulo exporta `init…()`.
- `assets/Mockups/*.png`: capturas de proyectos. `assets/perfil.jpeg`, `cv.pdf`.
- `robots.txt`, `sitemap.xml`: SEO.

## Convenciones
- Textos y `alt` en español. Toda `<img>` lleva `alt`, `width`, `height`, lazy.
- Si una `<img>` tiene `width`/`height` en el HTML, su CSS debe fijar `height: auto`
  (Safari toma el atributo como alto real y recorta).
- Respetar `prefers-reduced-motion` y mantener foco visible / aria existentes.
- Commits: frase corta en español, imperativo/presente, sin prefijos. Sin menciones a IA.

## Zonas sensibles (nivel CRITICAL)
- Ninguna (sin auth, pagos ni datos). Cuidar datos de contacto públicos.

## No tocar / pendientes
- Huérfanos sin referencias (borrar cuando el usuario confirme): `style.css`, `script.js`,
  `particles.min.js`, `particlesjs-config.json`, `assets/bg video.mp4`. No editarlos.
- PNG de Mockups sin uso: Brubank, CrediCuotas, FilmDex, Kaizenth, NaranjaX, Reciklo,
  Yuno, catjump.
- El enlace "App Store" de FiscaCheck está deshabilitado (falta URL).
