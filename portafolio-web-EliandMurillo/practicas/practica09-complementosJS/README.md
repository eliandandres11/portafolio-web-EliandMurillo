# 🌟 Práctica 09: Complementos de JavaScript (Manipulación de UI Avanzada)

## 🎯 Objetivo de la Práctica
El objetivo principal de esta actividad fue demostrar el dominio de **JavaScript Vanilla** para la manipulación dinámica del **DOM (Document Object Model)** y la mejora de la **experiencia de usuario (UX)** a través de cuatro componentes interactivos. Se puso énfasis en la limpieza del código, la estética (CSS) y el *feedback* al usuario.

## 💻 Estructura de la Práctica
Esta práctica está organizada en cuatro subcarpetas, cada una con un componente interactivo auto-contenido (`index.html` y `<script>`).

| Carpeta | Componente | Funcionalidad Principal | Conceptos Clave Demostrados |
| :--- | :--- | :--- | :--- |
| **`background`** | **Cambiador de Fondo Hex** | Genera y aplica un color de fondo hexadecimal aleatorio en el `body`, mostrando el código RGB. | Generación de datos aleatorios (`Math.random`) y aplicación de estilos CSS en tiempo real. |
| **`checklist`** | **Lista de Tareas (To-Do)** | Permite la gestión completa de tareas (añadir, eliminar, marcar como completada) con estética moderna (Flat Design). | Creación dinámica de elementos (`createElement`), manejo de `classList` y eventos de teclado (Enter). |
| **`galeriaIMG`** | **Galería de Imágenes** | Implementa un carrusel cíclico de imágenes con navegación hacia adelante y hacia atrás, incluyendo un efecto visual (*fade*). | Control de índice de *array* con operador Módulo (%) para ciclos, y transiciones con `setTimeout`. |
| **`validador`** | **Validador de Formulario** | Valida que los campos de Nombre y Correo cumplan con criterios básicos (no vacíos y formato de email), ofreciendo *feedback* visual inmediato. | Captura de evento `submit`, prevención de acción por defecto (`e.preventDefault()`), y uso de expresiones regulares (Regex). |

## ⚙️ Instrucciones para Ejecutar
Para probar cada componente, navega a su respectiva subcarpeta y abre el archivo `index.html` en tu navegador:

1.  **background/**: Haz clic en el botón para ver transiciones suaves y el código hexadecimal cambiar.
2.  **checklist/**: Prueba agregar, eliminar y completar tareas; nota el diseño minimalista.
3.  **galeriaIMG/**: Navega entre imágenes y observa el efecto de desvanecimiento entre cada cambio.
4.  **validador/**: Intenta enviar con campos vacíos o con formato de correo inválido para ver los mensajes de error dinámicos.