# ⚛️ Práctica 11: Explorador Dinámico de The Simpsons API

## 🎯 Objetivo
El objetivo de esta práctica es demostrar el dominio de **JavaScript asíncrono** y la interacción con servicios externos (APIs REST). Los puntos clave son:
1.  **Peticiones Asíncronas:** Uso del método `fetch` con `async/await` para gestionar la comunicación con una API externa.
2.  **Manipulación Dinámica del DOM:** Recibir datos JSON y generar contenido HTML (`.card`) en tiempo real, inyectándolo en la página.
3.  **Manejo de Múltiples Respuestas:** Adaptar el renderizado del DOM basado en el tipo de entidad consultada (personajes, episodios, lugares).
4.  **Manejo de Errores:** Implementar bloques `try...catch` para ofrecer una experiencia de usuario robusta ante fallos de red o de la API.

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura del formulario y contenedor de resultados.
* **CSS3:** Diseño temático (The Simpsons) responsivo con Flexbox para el layout de tarjetas.
* **JavaScript (ES6+):** `async/await`, `fetch`, `addEventListener`, y renderizado dinámico de datos.
* **API Externa:** The Simpsons API (con uso de proxy para evitar errores de CORS).

## ⚙️ Instrucciones para Ejecutar
1.  **Clonar o Descargar** esta carpeta.
2.  Abrir el archivo **`index.html`** en el navegador.
3.  Seleccionar una opción del menú desplegable (Personajes, Episodios, Lugares).
4.  Hacer clic en **"Obtener datos"** para que el JavaScript solicite la información a la API y la muestre en tarjetas.

## ⚠️ Nota sobre la API
Debido a las restricciones de *Cross-Origin Resource Sharing (CORS)* de la API original, se utiliza un proxy (`https://corsproxy.io/`) para garantizar que la aplicación web pueda realizar peticiones desde un entorno local o de desarrollo.