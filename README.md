# APIs-AWOS

## Proyecto APIs — Aplicaciones Web Orientado a Servicios

Proyecto académico desarrollado para la materia **Aplicaciones Web Orientado a Servicios (AWOS)**. El objetivo es demostrar el consumo de distintos servicios web mediante el uso de APIs públicas pertenecientes a diferentes categorías.

**Alumno:** Andrey Emiliano Mares Estrada
**Grupo:** ITIID 5
**Institución:** Universidad Politécnica del Estado de Nayarit (UPEN)

---

# Estructura del proyecto

```text
Apis-Awos/
├── maps-app/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── nasa-app/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── social-app/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── spotify-dashboard/
    ├── frontend/
    │
    └── spotify-api/
         ├── src/
         │   ├── config/
         │   │   └── token.ts
         │   │
         │   ├── controllers/
         │   │   ├── auth.controller.ts
         │   │   └── spotify.controller.ts
         │   │
         │   ├── routes/
         │   │   ├── auth.route.ts
         │   │   └── spotify.route.ts
         │   │
         │   ├── services/
         │   │   ├── auth.service.ts
         │   │   └── spotify.service.ts
         │   │
         │   └── server.ts
         │
         ├── .env
         ├── app.ts
         ├── package.json
         ├── pnpm-lock.yaml
         └── pnpm-workspace.yaml
```

---

# APIs utilizadas

## 1. Geolocalización — OpenStreetMap + Leaflet

**Ubicación:** `maps-app/`

Esta aplicación obtiene la ubicación actual del usuario mediante la API de geolocalización del navegador y la muestra en un mapa interactivo utilizando Leaflet y OpenStreetMap.

### Tecnologías utilizadas

* OpenStreetMap
* Leaflet.js
* Geolocation API del navegador

### Características

* Obtención de la ubicación actual del usuario.
* Visualización de mapas interactivos.
* Marcadores dinámicos.
* No requiere API Key.

---

## 2. Open Data — NASA APOD API

**Ubicación:** `nasa-app/`

Esta aplicación consume la API Astronomy Picture of the Day (APOD) de la NASA para mostrar imágenes astronómicas junto con su información descriptiva.

### API utilizada

https://api.nasa.gov/

### Características

* Obtención de la imagen astronómica del día.
* Visualización de título, fecha y descripción.
* Consumo de datos abiertos mediante peticiones HTTP.
* Manejo asíncrono utilizando Fetch API.

---

## 3. Redes Sociales — DummyJSON

**Ubicación:** `social-app/`

Esta aplicación simula un feed de red social consumiendo publicaciones desde la API DummyJSON.

### API utilizada

https://dummyjson.com/posts

### Características

* Visualización de publicaciones.
* Muestra títulos, contenido y reacciones.
* Consumo de datos en formato JSON.
* Renderizado dinámico mediante JavaScript.

---

## 4. Streaming — Spotify Web API

**Ubicación:** `spotify-dashboard/`

Esta aplicación consume la API oficial de Spotify utilizando OAuth 2.0 para autenticar usuarios y acceder a información de la plataforma.

### Tecnologías utilizadas

* Node.js
* Express
* TypeScript
* Spotify Web API
* OAuth 2.0

### Características

* Inicio de sesión con Spotify.
* Obtención de información del usuario autenticado.
* Consulta de artistas favoritos.
* Consulta de canciones favoritas.
* Gestión de tokens de acceso.
* Arquitectura basada en Controllers, Services y Routes.

---

# Tecnologías generales utilizadas

* HTML5
* CSS3
* JavaScript
* TypeScript
* Node.js
* Express
* Fetch API
* OAuth 2.0

---

# Objetivo del proyecto

Implementar y consumir diferentes servicios web pertenecientes a distintas categorías:

* Streaming
* Redes Sociales
* Open Data
* Geolocalización

Demostrando el manejo de peticiones HTTP, procesamiento de respuestas JSON, programación asíncrona y organización de proyectos web orientados a servicios.
