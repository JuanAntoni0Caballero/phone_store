## Configuración inicial

Antes de ejecutar la aplicación, asegúrate de crear un archivo .env en la raíz del proyecto con el siguiente contenido:

REACT_APP_API_URL = URL_DEL_SERVICIO

Reemplaza "URL_DEL_SERVICIO" con la URL del servicio de la API, que debe terminar en .com/api

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 en tu navegador para ver la aplicación.

### `npm test`

Ejecuta el modo de pruebas.

### `npm run build`

Construye la aplicación para producción en la carpeta build.

### `npm run lint`

Analiza los archivos del proyecto en busca de problemas de calidad de código y estilo utilizando ESLint.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para la construcción de interfaces de usuario.
- **React Router**: Para la gestión de rutas en una aplicación de una sola página (SPA).
- **ESLint**: Herramienta para el análisis estático del código que garantiza la calidad y consistencia del código a lo largo del proyecto.
- **Jest + React Testing Library**: Herramientas para la realización de pruebas unitarias y de integración, garantizando que los componentes funcionen como se espera.
- **Babel**: Transpila el código de ES6+ a JavaScript compatible con los navegadores actuales.

## Dependencias:

- **@testing-library/dom, @testing-library/jest-dom, @testing-library/react**: Utilizadas para la realización de pruebas unitarias de componentes React.
- **React Router Dom**: Para la gestión de rutas dentro de la aplicación.
- **React Scripts**: Herramientas de configuración predeterminada para trabajar con React sin necesidad de configuraciones adicionales.

---

## Arquitectura y Patrones de Diseño

### Arquitectura General

La aplicación sigue una **arquitectura basada en componentes** con un enfoque de **separación de responsabilidades** haciendo uso de los principios **SOLID**(cuando son aplicables), lo cual ayuda a mantener un código más limpio, modular y fácil de mantener. Las principales capas de la aplicación son:

1. **Capa de Presentación (UI)**: Se encarga de la interacción con el usuario. Los componentes como `PhoneCard` y `SearchInput` gestionan la representación de los datos y la interacción de búsqueda del usuario.

2. **Capa de Lógica**: La lógica de la aplicación, como la carga de datos (`useEffect`) y el filtrado de información (`handleSearch`), se encuentra en el componente `Home`. Aquí se gestiona el estado de la aplicación y se coordina la interacción con la capa de servicios.

3. **Capa de Servicios**: Los datos se obtienen a través de servicios dedicados como `phoneService`. Estos servicios encapsulan la lógica de negocio relacionada con la obtención de datos, proporcionando una capa de abstracción entre la UI y las llamadas a la API.

Este enfoque modular facilita la escalabilidad y el mantenimiento de la aplicación, permitiendo que cada parte del código se pueda desarrollar y modificar independientemente sin afectar a otras partes del sistema.

Este proyecto sigue una arquitectura basada en **componentes reutilizables** (React). Cada parte de la UI es un componente independiente que puede recibir **props** y generar una salida declarativa basada en el estado actual.

### **Patrón de Componente Presentacional**

La aplicación hace uso del patrón de **Componente Presentacional** para dividir la lógica de negocio de la interfaz de usuario. Los componentes presentacionales son responsables solo de la representación visual y la interacción del usuario, mientras que la lógica y el estado de los componentes se gestionan a través de **props** o **Context API**.

### **Manejo de Estado**

El manejo del estado en este proyecto se realiza principalmente a través de React Context, que permite compartir el estado global (como el número de elementos en el carrito) entre diferentes componentes sin necesidad de prop-drilling. En este caso, el estado del carrito de compras se gestiona mediante el **CartContext**, que se proporciona a través de un **CartProvider**. Además, el acceso a este contexto se maneja a través de un **custom hook** llamado **useCart**, el cual abstrae la lógica de acceso al contexto y permite a los componentes obtener el estado del carrito y la función para agregar productos de manera más sencilla y reutilizable.

### **Gestión de Rutas (Routing)**

El proyecto utiliza **React Router** para gestionar las rutas. Esto permite a la aplicación cargar componentes específicos basados en la URL actual sin necesidad de recargar la página. Esto proporciona una experiencia de usuario más fluida y dinámica, acorde con las mejores prácticas en aplicaciones de una sola página (SPA).

### Componentes reutilizables

Se han desarrollado desde cero los siguientes componentes reutilizables que, en caso de seguir creaciendo la aplicación, se deberían seguir incorporando a los nuevos componentes:

1.  **Button**: Un botón que recibe un texto para mostrar en el mismo y la acción a realizar.

2.  **Selector**: Un selector que recibe un texto para mostrar, las opciones para seleccionar, el valor del elemento por defecto o ya seleccionado y la acción para cuando el usuario haga una selección.

3.  **SearchInput**: Un input que recibe un texto para el placeholder y la función de devolucion del texto.

---

## Estrategias de Optimización y Rendimiento

El uso de **localStorage** permite almacenar temporalmente los datos obtenidos de la API, lo que reduce la necesidad de realizar solicitudes repetidas a la misma. Esto se traduce en:

1.  **Reducción de Cargas del Servidor**: Menos solicitudes a la API, lo que mejora la escalabilidad del sistema.

2.  **Mejor Experiencia de Usuario**: Los datos se cargan rápidamente desde el almacenamiento local, mejorando la velocidad de la aplicación.

---

### Pruebas

Se han implementado pruebas utilizando **Jest** y **React Testing Library** para asegurar que los componentes funcionan correctamente.

### Ejemplos de Tests Implementados:

1. **Renderizado de Opciones:**

   - Se verifica que las opciones sean renderizadas correctamente dentro del selector.

2. **Prueba de Cambio de Valor:**

   - Se simula el cambio de valor en el selector y se asegura de que la función `onChange` se haya llamado correctamente.

3. **Verificación de Valor Seleccionado:**
   - Se asegura de que el valor seleccionado se muestre correctamente en la interfaz.

---
