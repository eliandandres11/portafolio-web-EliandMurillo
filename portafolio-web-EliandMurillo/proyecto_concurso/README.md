# 🏆 Proyecto de Innovación: EvoPlay (Plataforma Deportiva Multideporte)

## 📌 Estado y Acceso

| Categoría | Detalle |
| :--- | :--- |
| **URL de Producción** | [EvoPlay - React App](https://evo-play-9bvr.vercel.app) |
| **Arquitectura** | MERN Stack (MongoDB, Express, React, Node) |
| **Despliegue (Deploy)** | Frontend en Vercel, Backend en Render. |

## 🎯 Objetivo y Enfoque Técnico

Este proyecto fue un ejercicio avanzado diseñado para demostrar el manejo de la **Arquitectura MERN Stack** y la robustez del código en un entorno de producción con múltiples dependencias asíncronas. Los objetivos técnicos principales fueron:

* **Consumo Asíncrono Robusto:** Implementar y centralizar el manejo de peticiones asíncronas (`async/await`) a la API propia (Backend Node/Express) a través de un módulo central (`api.js`), asegurando la inclusión automática del token JWT para rutas protegidas.
* **Manejo de Errores y Congelamiento:** Implementar lógica `try/catch` y estados de control (`loading`, `errorMsg`) en React para prevenir el congelamiento de la interfaz (un problema común en sistemas asíncronos), ofreciendo *feedback* claro al usuario si el servidor no responde o si los datos llegan incorrectamente.
* **Renderizado Dinámico y Multideporte:** Utilizar la arquitectura de componentes de React para renderizar información de la base de datos (Ej: Tablas de Posiciones) y aplicar lógica condicional (`esDeporteSets`) para modificar el *markup* (ocultar columna de Empates en Voleibol, mostrar Goles vs Sets).
* **Diseño Modular y CMS:** Demostrar cómo se usa la configuración de la base de datos (CMS) para aplicar estilos globales (`--gold`, `--dark-bg`) y estructurar el contenido (widgets en `HomePage.js`).

## 🧠 Arquitectura del Sistema (MERN)

El proyecto opera bajo una arquitectura distribuida (microservicios lógicos) en la que el Frontend y el Backend están alojados en plataformas de despliegue separadas:

1.  **Backend (Node/Express):** Alojado en Render. Se encarga de la lógica de negocio, la comunicación con MongoDB, la autenticación JWT y el cálculo de estadísticas deportivas.
2.  **Frontend (React):** Alojado en Vercel. Es una Aplicación de Página Única (SPA) que interactúa con el usuario y realiza las peticiones asíncronas al Backend.

## 🔒 Aspectos de Seguridad

* **Autenticación:** Utiliza **JWT (JSON Web Tokens)** para la autenticación de administradores, asegurando que solo usuarios verificados puedan acceder a las rutas protegidas (CRUD de equipos, edición de datos de tablas).
* **Gestión de Peticiones:** Las peticiones se canalizan a través de **Axios** y un módulo central (`api.js`) que automáticamente adjunta el token JWT en el encabezado de las peticiones que requieren seguridad.

## 💻 Tecnologías Detalladas

| Componente | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Arquitectura** | MERN Stack (MongoDB, Express, React, Node) | Base de desarrollo Full Stack unificada. |
| **Backend** | Node.js / Express.js / Render | Servidor de API, lógica de negocio y cálculo de estadísticas. |
| **Frontend** | React.js / Vercel | Interfaz de usuario dinámica y responsiva (SPA). |
| **Base de Datos** | MongoDB Atlas / Mongoose | Almacenamiento de datos con soporte para Subdocumentos (Jugadores dentro de Equipos). |
| **Seguridad** | JWT (JSON Web Tokens) | Autenticación de administradores. |
| **Peticiones** | Axios / `api.js` | Consumo asíncrono y centralización del envío del token de seguridad. |
| **Diseño** | CSS Grid / Framer Motion | Layout responsivo, animaciones de transición y diseño "Sporty Luxury". |

## ⚙️ Instrucciones para Ejecutar y Verificar Funcionalidad

El proyecto se ejecuta en un entorno de producción distribuido (Vercel + Render).

### Pruebas de Funcionalidad Asíncrona:

1.  **Verificación de Servidores:** Asegúrate de que tu servicio EvoPlay en Render esté en estado **"Live" (Verde)**.
2.  **Prueba de Funcionalidad Asíncrona (Pública):** Navega a **"Tabla"** y selecciona las categorías **"Fútbol 7"** y **"Voleibol"**. Verifica que las tablas se actualizan sin recargar la página y que las columnas (Ej: "E" de Empates) se ajustan a la lógica de cada deporte.
3.  **Prueba de Manejo de Errores (Admin):** Entra a **"Admin Login"**. Si la página se congela o da error, presiona el botón **"Reintentar"** que aparece en el centro. La página debe recuperarse y cargar los datos, demostrando la estructura `try/catch` implementada.

## 🧑‍💻 Colaboradores

* **Eliand Andres Murillo Ramos**- Estudiante de Ingeniería en Sistemas Computacionales.
* **José Jaime Núñez Vázquez**- Estudiante de Ingeniería en Sistemas Computacionales.
* **David Quiroz Morales** - Estudiante de Ingeniería en Sistemas Computacionales.