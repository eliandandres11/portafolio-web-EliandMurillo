# 🌟 Práctica 06: Diseño y Desarrollo del Currículum Vitae Web 

## 🎯 Objetivo
El objetivo principal fue el diseño y desarrollo de una página web funcional y profesional que sirviera como Currículum Vitae digital.

Esta versión final se centró en:
1.  **Optimización Visual:** Implementar un diseño moderno, profesional y con jerarquía de información clara, utilizando una paleta de colores limpia y tipografía legible.
2.  **Responsividad Avanzada:** Garantizar una experiencia de usuario fluida y adaptable en dispositivos móviles y de escritorio mediante el uso de CSS Grid y Media Queries.
3.  **Interactividad:** Corregir y mejorar la implementación de JavaScript para animar dinámicamente las barras de progreso de habilidades y los contadores de porcentajes de idiomas, activándolos de forma elegante mediante el API `IntersectionObserver`.

## 💻 Tecnologías Usadas
* **HTML5:** Estructura semántica avanzada (uso de `article` y `section`).
* **CSS3:** Flexbox, Grid Layout, Variables CSS, transiciones suaves, y `::after`/`::before` para estilos de detalle.
* **JavaScript (ES6+):**
    * Manipulación del DOM para animaciones.
    * Uso de `setTimeout` y `requestAnimationFrame` para animaciones fluidas.
    * Implementación de **`IntersectionObserver`** para ejecutar animaciones solo cuando los elementos entran en el viewport (corrección de "bugs" de inicialización).

## 🚀 Instrucciones para Ejecutar
1.  **Clonar el repositorio** o descargar los archivos `index.html`, `styles.css` y `main.js`.
2.  Abre el archivo `index.html` en un navegador web moderno (Chrome, Firefox, Safari, Edge).
3.  **Observa:** Las barras de habilidades y los contadores de idiomas se animarán automáticamente cuando hagas scroll y las secciones sean visibles en la pantalla (gracias al **Intersection Observer**).

## 🧩 Estructura de Archivos