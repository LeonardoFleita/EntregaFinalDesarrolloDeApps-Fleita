# Smartly

**Smartly** es un e-commerce desarrollado completamente desde cero como parte de mi proyecto final del curso de desarrollo de aplicaciones móviles en **Coderhouse**.

Desde la conceptualización del diseño hasta la implementación del desarrollo, cada aspecto ha sido realizado por mí, incluyendo las imágenes, el logo de la aplicación y el listado de productos y categorías.

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)

## Video de Funcionalidad

Puedes ver el video de la funcionalidad de la aplicación en el siguiente enlace:

[Ver video en Google Drive](https://drive.google.com/file/d/10xseVC1BA1-0KlVt7fvISsD7tz-eBapi/view?usp=drive_link)

## Estructura de la aplicación

La app está organizada en tres secciones principales, destacando por su funcionalidad y experiencia de usuario intuitiva:

### 1. Tienda

Esta sección está diseñada para ofrecer una experiencia de compra fluida e incluye cuatro pantallas principales:

- **Categorías**: Explora los productos organizados en diversas categorías.
- **Listado de productos**: Muestra los productos disponibles dentro de una categoría.
- **Detalles del producto**: Información completa de cada producto, incluyendo imagen, descripción, precio y etiquetas.
- **Favoritos**: Una lista personalizada de los productos seleccionados por el usuario.

### 2. Carrito

En esta sección el usuario puede gestionar los productos agregados al carrito. Las funcionalidades principales incluyen:

- **Visualizar los productos**: Muestra una lista de los productos que el usuario ha agregado al carrito.
- **Sumar o restar cantidades**: Permite ajustar la cantidad de cada producto, respetando el stock disponible.
- **Eliminar productos individuales**: Opción para quitar un producto específico del carrito.
- **Vaciar el carrito**: Elimina todos los productos agregados de una sola vez.
- **Realizar la compra**: Finaliza el proceso de compra con los productos seleccionados.

### 3. Perfil

En esta sección se puede visualizar la pantalla de perfil si el usuario está logueado. Desde el perfil se puede:

- **Visualizar la imagen de perfil**: Incluye un botón para acceder a la cámara del dispositivo y tomar una foto.
- **Acceder a las siguientes opciones**:
  - **Datos personales**: Visualiza y modifica los datos principales del usuario, como nombre y apellido.
  - **Mis compras**: Muestra un listado de los recibos de compra realizados por el usuario.
  - **Mis direcciones** _(en construcción)_: Permitirá gestionar las direcciones de entrega configuradas por el usuario.
  - **Cambiar contraseña** _(en construcción)_: Permitirá al usuario actualizar su contraseña.
  - **Configuración** _(en construcción)_: Incluirá opciones adicionales para personalizar la experiencia de la aplicación.

En caso de que el usuario **no esté logueado**, esta sección redirige automáticamente a la pantalla de **login**, donde puede iniciar sesión o acceder al enlace para registrarse en la aplicación.

---

### Navegación sin inicio de sesión

Si bien el usuario puede navegar libremente por la aplicación sin estar logueado, algunas funciones estarán limitadas. Sin iniciar sesión, no podrá:

- Marcar productos como favoritos o acceder a esta sección.
- Acceder a la sección de perfil.
- Realizar compras.

## Estructura de los archivos

En la carpeta raíz, además del `App.js` que es el archivo principal, se encuentra una carpeta llamada `src` que contiene todo el código fuente de la aplicación.

### Carpeta principal

- **components**: Es la carpeta principal, que contiene tres subcarpetas donde se encuentran los componentes de la app:
  - **common**: Contiene los componentes reutilizables.
  - **layout**: Incluye componentes que se visualizan en múltiples pantallas, como el `Header`.
  - **screens**: Agrupa las pantallas de la aplicación, organizadas en carpetas distintivas.
    - La estructura de cada pantalla incluye:
      - **`ScreenContainer.jsx`**: Contiene toda la lógica del componente y retorna la estructura completa.
      - **`Screen.jsx`**: Encargado de renderizar los aspectos visuales del componente.

### Otras carpetas dentro de `src`

- **data**: Contiene los archivos JSON que incluyen los productos y categorías, los cuales fueron subidos a Firebase.

- **db**: Incluye el código de **SQLite** utilizado para mantener la sesión activa del usuario.

- **features**: Almacena los slices creados con **Redux Toolkit**.

- **firebase**: Exporta la configuración necesaria para conectarse a Firebase.

- **global**: Contiene:

  - **`colors.js`**: Define la paleta de colores utilizada en la aplicación.
  - **`toastConfig.js`**: Configuración base de los toasts que se muestran en la app.

- **navigation**: Posee el código relacionado con la navegación entre pantallas:

  - **`MainNavigator`**: Contiene la estructura principal de navegación.
  - **`TabNavigator`**: Agrupa los stacks `shop` y `profile`.

- **service**: Contiene los archivos necesarios para interactuar con Firebase (Realtime Database y Authentication), manejados mediante **Redux Toolkit Query**.

- **store**: Incluye la configuración del store de Redux Toolkit, integrando los slices y services.

- **styles**: Contiene estilos reutilizables que se aplican en varias partes de la app.

- **utils**: Incluye funciones auxiliares que son utilizadas en diferentes componentes de la aplicación.

## Tecnologías

La aplicación fue desarrollada utilizando las siguientes tecnologías principales:  
![React Native](https://img.shields.io/badge/React%20Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)![Expo](https://img.shields.io/badge/Expo-1B1F23?style=flat-square&logo=expo&logoColor=white)![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

## Dependencias

A continuación, se describen las principales dependencias utilizadas en la aplicación, junto con una breve explicación y el comando para instalarlas.

Para instalar todas las dependencias definidas en el archivo `package.json`, simplemente utiliza el siguiente comando:

```bash
npm install
```

### 1. react-navigation/bottom-tabs

Permite la implementación de un sistema de navegación basado en pestañas para moverse entre diferentes secciones de la app.

```bash
npm install @react-navigation/bottom-tabs
```

### 2. react-navigation/native

Proporciona las funcionalidades básicas de navegación para aplicaciones React Native.

```bash
npm install @react-navigation/native
```

### 3. react-navigation/native-stack

Ofrece un sistema de navegación basado en pilas (stacks), ideal para transiciones entre pantallas.

```bash
npm install @react-navigation/native-stack
```

### 4. @reduxjs/toolkit

Herramienta oficial para manejar el estado global de la app de manera eficiente y simplificada.

```bash
npm install @reduxjs/toolkit
```

### 5. expo-font

Permite cargar fuentes personalizadas en la aplicación.

```bash
npm install expo-font
```

### 6. expo-image-picker

Permite a los usuarios seleccionar imágenes de la galería o tomar fotos con la cámara.

```bash
npm install expo-image-picker
```

### 7. expo-location

Proporciona acceso a la ubicación geográfica del dispositivo.

```bash
npm install expo-location
```

### 8. expo-splash-screen

Herramienta para personalizar y gestionar la pantalla de carga inicial.

```bash
npm install expo-splash-screen
```

### 9. expo-sqlite

Proporciona una base de datos SQLite para almacenar datos localmente.

```bash
npm install expo-sqlite
```

### 10. expo-status-bar

Permite personalizar la barra de estado en la parte superior del dispositivo.

```bash
npm install expo-status-bar
```

### 11. react-native-dotenv

Permite manejar variables de entorno de manera segura en React Native.

```bash
npm install react-native-dotenv
```

### 12. react-native-maps

Proporciona un componente para integrar mapas en la aplicación.

```bash
npm install react-native-maps
```

### 13. react-native-toast-message

Muestra mensajes tipo toast de manera fácil y personalizable.

```bash
npm install react-native-toast-message
```

### 14. react-redux

Facilita la integración de Redux con React para el manejo del estado.

```bash
npm install react-redux
```

## Pantallas

<br>

|                                                                 **Splash**                                                                 |                                                                 **Login**                                                                 |                                                                **Sign up**                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| ![Splash](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/asinh7no8n7vcj9bg6qj.png) | ![Login](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/pafpftjdgaqzxgynqbwf.png) | ![Signup](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/kjzaekwaypvshzolvrnm.png) |

<br>

|                                                                 **Categorías**                                                                 |                                                                 **Listado de productos**                                                                 |                                                                 **Detalle de producto**                                                                 |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Categorías](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/vy1fo3bs37ju5wj0sydf.png) | ![Listado de productos](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/nztexyultgo1tkq26ghf.png) | ![Detalle de producto](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/wvfxibb0mubkrvlhrsxz.png) |

<br>

|                                                                 **Perfil sin foto**                                                                 |                                                                 **Perfil con foto**                                                                 |                                                                 **Datos personales**                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Perfil sin foto](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/we8aug5qs0dyklxiwyxa.png) | ![Perfil con foto](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/krfoajygdrdgyvdnjy1t.png) | ![Datos personales](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/vvyhyx5iihqc9yomfgav.png) |

<br>

|                                                                 **Carrito vacío**                                                                 |                                                                 **Modal carrito**                                                                 |                                                                 **Carrito**                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| ![Carrito vacío](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/fddkzx9ftfqs3ksq7699.png) | ![Modal carrito](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/i5ppcs7olj9peexibjwo.png) | ![Carrito](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/gebmd893a9vfezf4aieu.png) |

|                                                                 **Favoritos vacío**                                                                 |                                                                 **Modal favoritos**                                                                 |                                                                 **Favoritos**                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Favoritos vacío](https://res.cloudinary.com/drez01kou/image/upload/v1732499372/desarrollo%20de%20apps/smartly%20screens/vaogp2zmo9ikvzeg7ooj.png) | ![Modal favoritos](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/dzijlaewualjngz2aazj.png) | ![Favoritos](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/fjmjl4qewtdsfozzuwcs.png) |

|                                                                 **En construcción**                                                                 |                                                                 **Sin compras**                                                                 |                                                                 **Mis compras**                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
| ![En construcción](https://res.cloudinary.com/drez01kou/image/upload/v1732499374/desarrollo%20de%20apps/smartly%20screens/gt6revicfjksfhumvmyj.png) | ![Sin compras](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/znoud8hiixdzyznj4a9a.png) | ![Mis compras](https://res.cloudinary.com/drez01kou/image/upload/v1732499373/desarrollo%20de%20apps/smartly%20screens/nq54ov7dh5zvuzw15isv.png) |

## Contacto

Este proyecto fue desarrollado por **Leonardo Fleita**.  
Si tienes preguntas, sugerencias o deseas contactarme, puedes escribirme a:  
📧 **leo.fleita@gmail.com**

También puedes encontrarme en:

- 🌐 [GitHub](https://github.com/LeonardoFleita)
- 💼 [LinkedIn](https://www.linkedin.com/in/leonardo-fleita/)
