### Brief del Proyecto: News App
### 🎯 Objetivo
Construir una aplicación que consuma una API pública de noticias y muestre titulares en una interfaz clara, con búsqueda y estados de error/loading bien definidos.

### 📦 Requisitos
# Hook principal (useNewsFeed)
* Devuelve { articles, error, loading }.
* Normaliza cada artículo a { title, description, image, url }.

# Componente NewsList
* Renderiza tarjetas con título, imagen y enlace.
* Maneja estados de loading y error.

# Búsqueda
* Barra para filtrar titulares por palabra clave.

# Fallback
* Si la API falla, muestra un mensaje claro y un set de artículos de ejemplo.

# UI/UX
* Scroll snapping para navegar entre artículos.
* Hover effects en tarjetas.
* Banner de error estilizado (no solo texto plano).

## 🔧 API sugerida
* Mediastack : https://mediastack.com


### Screenshot

<p align="center">
  <img src="./public/solution-desktop-light.jpg" width="400" alt="desktopLight" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/solution-desktop-dark.jpg" width="300" alt="desktopdark" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/solution-mobile-light.jpg" width="200" alt="mobilelight" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/solution-mobile-dark.jpg" width="200" alt="mobiledark" />
</p>

## Authorsi, completemos las

- Website - [Carla Johanna](https://github.com/devcjoha)
- Frontend Mentor - [@devcjoha](https://www.frontendmentor.io/profile/devcjoha)
- X - [@CarlitaJohanna](https://www.x.com/carlitajohana)


## 🚀 Live Deploys

- Solution URL: [code]()
- Live Site URL: [Deploy-Github-Pages]()


## My process

### Built with

<p align="center">
<img src="./public/react.svg" alt="react" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/tailwind.svg" alt="tailwind" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/vite.svg" alt="vite" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/github.svg" alt="githubPages" width="55px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/nodejs.svg" alt="nodejs" width="55px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/css.svg" alt="css" width="55px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/js.svg" alt="js" width="55px" />
</p>

- React (component-based architecture).
- Vite (development and packaging).
- Functional components and hooks (useState, useEffect).
- Tailwind custom propertie, theme dark/light.
- Responsive design.



### 👩🏻‍🦱 What I learned
* 


### 💥 Continued development
* 

### 🔗 Useful resources
* Tailwind docs
* GitHub Pages deployment guides
* Vite + React integration tips

## 🚀 Deployment & Environment Setup

### 🧪 Entornos

- **Local**: Use `/` as the base for routes.

- **Production (GitHub Pages)**: Use `/` as the base.

### ⚙️ Scripts disponibles

```bash
# Ejecuta el proyecto en desarrollo local
npm run dev

# Build estándar (no recomendado para GitHub Pages)
npm run build

# Build para GitHub Pages (usa base name correcto)
npm run build:gh

# Vista previa del build
npm run preview
```

### 🧠 Why this configuration?

## Asset Handling for GitHub Pages
* To ensure logos and images load correctly in production:
* All SVG logos are stored in public/assets/.
* Each extension in data.json uses only the filename for its logo, like "logo-devlens.svg".
* In the hook, image paths are constructed using:

```js
logo: `${import.meta.env.BASE_URL}assets/${item.logo}`;
```
This ensures compatibility with GitHub Pages, which serves your app from a subpath like /browser-extension-manager-ui/. Using import.meta.env.BASE_URL dynamically adjusts the asset path based on the deployment environment.


## Author

- Website - [Carla Johanna](https://github.com/devcjoha)
- Frontend Mentor - [@devcjoha](https://www.frontendmentor.io/profile/devcjoha)
- X - [@CarlitaJohanna](https://www.x.com/carlitajohana)
