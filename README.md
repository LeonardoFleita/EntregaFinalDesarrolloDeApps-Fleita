# Smartly

**Smartly** es un e-commerce desarrollado completamente desde cero como parte de mi proyecto final del curso de desarrollo de aplicaciones móviles en **Coderhouse**.

Desde la conceptualización del diseño hasta la implementación del desarrollo, cada aspecto ha sido realizado por mí, incluyendo las imágenes, el logo de la aplicación y el listado de productos y categorías.

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)

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
