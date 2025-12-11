# 🌟 Práctica 10: Sistema de Autenticación (Login + Sesión)

## 🎯 Objetivo de la Práctica
El objetivo fundamental fue construir un sistema básico de autenticación de dos páginas, demostrando el manejo de la **persistencia de datos** y la **modularización del código** mediante JavaScript. Se buscó:
1.  **Manejo de Sesión:** Utilizar `localStorage` para almacenar un indicador de que el usuario ha iniciado sesión y redirigir al perfil.
2.  **Redirección y Seguridad:** Implementar lógica para proteger la página de `perfil.html`, redirigiendo al usuario si no hay una sesión activa.
3.  **Código Modular:** Refactorizar el archivo `login.js` usando una **Clase (`Authenticator`)** para encapsular la lógica de validación, simulando un enfoque más profesional.
4.  **Diseño (UX):** Aplicar un diseño de alto contraste (*Dark Mode*) y *feedback* de error visible para mejorar la experiencia de inicio de sesión.

## 💻 Estructura de la Práctica
Esta práctica consta de cuatro archivos interconectados:

| Archivo | Responsabilidad | Conceptos Clave |
| :--- | :--- | :--- |
| **`index.html`** | Interfaz de inicio de sesión. | Captura de datos del formulario y enlace al *script* de login. |
| **`login.js`** | Lógica de autenticación. | Manejo del evento `submit`, simulación de *hashing* de contraseña, y almacenamiento de `usuarioActual` en `localStorage`. |
| **`perfil.html`** | Página de acceso restringido. | Muestra el nombre del usuario logueado y contiene el botón de cierre de sesión. |
| **`perfil.js`** | Lógica de sesión. | Verifica la existencia de `localStorage.getItem('usuarioActual')` y maneja la función `cerrarSesion()` (`removeItem`). |

## ⚙️ Instrucciones para Ejecutar
1.  Asegúrate de que los cuatro archivos (`index.html`, `perfil.html`, `login.js`, `perfil.js`) y `styles.css` se encuentren en esta carpeta.
2.  Abre el archivo **`index.html`** en el navegador.
3.  **Credenciales Válidas (Hardcodeadas):**
    * **Usuario:** `admin`
    * **Contraseña:** `secure`
4.  Intenta ingresar con las credenciales válidas y luego cierra la sesión. Intenta acceder directamente a `perfil.html` sin iniciar sesión para probar la protección.