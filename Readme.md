# Documentación del Shopify Simulator

Bienvenido a **Shopify Simulator**, un entorno ligero diseñado para ayudar a los desarrolladores a explorar el lenguaje de plantillas Liquid y la arquitectura modular basada en secciones. Este proyecto simula las funcionalidades principales de Shopify, permitiéndote practicar en la creación de componentes reutilizables, iterar sobre datos y trabajar con configuraciones dinámicas.

---

## Tabla de Contenidos

- [Instalación y Ejecución](#instalación-y-ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Documentación Técnica / Arquitectura](#documentación-técnica--arquitectura)
- [Liquid: Conceptos Básicos](#liquid-conceptos-básicos)
- [Guía de Uso](#guía-de-uso)
- [Prueba Técnica Gradiweb - LP](#prueba-técnica-gradiweb---lp)

---

## Instalación y Ejecución

Para instalar los paquetes necesarios y ejecutar el programa correctamente, sigue estos pasos:

  ```bash
  npm install
  ```

Para iniciar el servidor de desarrollo con watch mode y live reload, ejecuta:

  ```bash
  npm run dev
  ```

Para iniciar solo el servidor sin watch mode, ejecuta:

  ```bash
  npm start
  ```

Si deseas compilar los estilos y scripts, ejecuta:

  ```bash
  npm run build
  ```

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina para ejecutar estos comandos.

---

## Estructura del Proyecto

La estructura del proyecto ha sido optimizada siguiendo el patrón SCSS 7-1 y mejores prácticas de desarrollo:

```
/gradiweb-lp
├── /config
│   ├── settings_schema.json      # Define los ajustes configurables para las secciones
│   ├── settings_data.json        # Contiene datos dinámicos para renderizar las secciones
├── /data
│   ├── products.json             # Datos de ejemplo de productos
│   ├── collections.json          # Datos de ejemplo de colecciones
├── /public
│   ├── styles.css                # Archivo CSS compilado
│   ├── main.js                   # Archivo JavaScript compilado
├── /sections
│   ├── featured-products.liquid  # Sección principal que renderiza listados de productos
│   ├── footer.liquid             # Sección del footer
│   ├── header.liquid             # Sección del header
│   ├── hero-banner.liquid        # Sección del banner principal
│   ├── latest-collection.liquid  # Sección de últimas colecciones
│   └── topbar.liquid             # Sección de la barra superior
├── /snippets
│   ├── collection-card.liquid    # Snippet para tarjetas de colección
│   ├── footer-logo.liquid        # Snippet del logo del footer
│   ├── logo.liquid               # Snippet del logo principal
│   ├── product-card.liquid       # Snippet reutilizable para tarjetas de producto
│   └── star.liquid               # Snippet para iconos de estrellas
├── /templates
│   ├── index.liquid              # Archivo de plantilla principal
├── /src
│   ├── app.js                    # Lógica principal en JavaScript
│   ├── app_simple.js             # Versión simplificada de la aplicación
│   ├── styles.scss               # Archivo principal SCSS con estructura 7-1
│   └── /styles                   # Arquitectura SCSS modular
│       ├── /animations           # Animaciones y transiciones
│       │   ├── _hover-effects.scss
│       │   └── _transitions.scss
│       ├── /base                 # Estilos base y tipografía
│       │   ├── _base.scss
│       │   └── _typography.scss
│       ├── /components           # Componentes de UI
│       │   ├── _collections.scss
│       │   ├── _featured-products.scss
│       │   ├── _footer-logo.scss
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _hero-banner.scss
│       │   ├── _latest-collection.scss
│       │   ├── _product-card.scss
│       │   ├── _product-carousel.scss
│       │   └── _topbar.scss
│       ├── /layout               # Layout y estructuras
│       │   ├── _grid.scss
│       │   └── _page.scss
│       ├── /settings             # Variables, funciones y mixins
│       │   ├── _functions.scss
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       └── /tools                # Utilidades y reset
│           ├── _reset.scss
│           └── _utilities.scss
├── /assets                       # Imágenes de productos, banners y colecciones
├── package.json
├── webpack.config.js
└── server.js
```

---

## Documentación Técnica / Arquitectura

### Objetivo del Proyecto

Este proyecto forma parte de una prueba técnica para GradiWeb. Se solicitó la creación de una landing page respetando diseños para desktop y mobile, utilizando el framework Shopify Simulator. Se debe trabajar en dos secciones obligatorias (excluyendo header, footer y top bar) para demostrar capacidad en la implementación de interfaces de usuario detalladas y responsive.

### Tecnologías y Herramientas

- **HTML/CSS:** Markup semántico y estilos responsive. Se utiliza la metodología [BEM](https://en.bem.info/methodology/) para la organización de estilos.
- **SASS:** Arquitectura SCSS 7-1 con variables, mixins y estructura modular para mantener el código CSS escalable y mantenible.
- **JavaScript:** Lógica limpia y reutilizable sin frameworks; se enfatiza la eficiencia en la manipulación del DOM y la interacción del usuario.
- **Webpack:** Configuración de loaders, plugins y optimización del bundle. Se incluye compilación de SCSS y optimización de assets.
- **Liquid:** Lenguaje de plantillas que permite renderizar dinámicamente contenido basado en configuraciones y datos.

### Arquitectura del Proyecto

El simulador está diseñado con una arquitectura modular que sigue las mejores prácticas:

#### Estructura SCSS 7-1
- **Settings:** Variables, funciones y mixins globales
- **Tools:** Utilidades y reset CSS
- **Base:** Estilos fundamentales y tipografía
- **Layout:** Sistemas de grid y estructura de página
- **Components:** Componentes de UI independientes y reutilizables
- **Animations:** Transiciones y efectos de hover

#### Arquitectura Liquid
- **Secciones:** Componentes independientes que renderizan partes específicas de la página, con acceso a datos dinámicos mediante `settings_data.json`.
- **Snippets:** Pequeños fragmentos de código reutilizables, que permiten mantener DRY el código en liquid.
- **Templates:** Plantillas principales que unen secciones y snippets.
- **Configuración y Datos:** Archivos `settings_schema.json` y `settings_data.json` que definen la estructura de configuraciones y almacenan valores dinámicos.

### Logros y Consideraciones

- **Arquitectura Optimizada:** Implementación de estructura SCSS 7-1 para mejor organización y mantenibilidad del código CSS.
- **Modularidad:** Separación clara de responsabilidades entre variables, mixins, componentes y utilidades.
- **Escalabilidad:** Estructura preparada para crecimiento del proyecto con nuevos componentes y funcionalidades.
- **Atención al detalle:** Se da especial importancia a respetar el diseño propuesto, asegurando una ejecución pixel perfect para clientes con alta sensibilidad visual.
- **Buenas prácticas en GitHub:** Se recomienda un manejo adecuado de commits, ramas y tags para facilitar la revisión del código.
- **Documentación del Código:** Es esencial documentar las partes del código que requieran explicaciones adicionales, enfatizando la claridad y mantenibilidad.
- **Experiencia Adicional:** Se valoran animaciones, efectos y toques creativos que enriquezcan la experiencia visual.

---

## Liquid: Conceptos Básicos

Liquid es el lenguaje de plantillas usado en Shopify para renderizar contenido dinámico. A continuación se resumen sus conceptos fundamentales:

### Secciones

Las secciones son componentes modulares que renderizan partes específicas del sitio. Ejemplo de una sección:

```liquid
<section class="featured-products">
  <h2>{{ settings['featured-products'].settings.heading }}</h2>
</section>
```

### Snippets

Los snippets son componentes reutilizables que se incluyen mediante la etiqueta `{% render %}`:

```liquid
<div class="product-list">
  {% for product in products %}
   {% render 'product-card', product: product %}
  {% endfor %}
</div>
```

### Iteración de Objetos

Liquid permite iterar sobre arrays como productos o colecciones:

```liquid
<ul>
  {% for product in products %}
   <li>{{ product.title }} - ${{ product.price }}</li>
  {% endfor %}
</ul>
```

### Filtros

Los filtros son usados para manipular la salida. Ejemplos comunes:
- `capitalize`
- `date`
- `money`

Ejemplo:

```liquid
{{ product.price | money }}
{{ product.created_at | date: "%B %d, %Y" }}
```

---

## Guía de Uso

### Arquitectura SCSS 7-1 Implementada

El proyecto ahora utiliza la arquitectura SCSS 7-1, una metodología probada para organizar proyectos de CSS grandes y complejos:

1. **Settings (`/src/styles/settings/`):**
   - `_variables.scss`: Colores, tipografía, espaciado, breakpoints
   - `_functions.scss`: Funciones SCSS reutilizables
   - `_mixins.scss`: Mixins para responsive design y utilidades

2. **Tools (`/src/styles/tools/`):**
   - `_reset.scss`: Reset CSS normalizado
   - `_utilities.scss`: Clases de utilidad comunes

3. **Base (`/src/styles/base/`):**
   - `_base.scss`: Estilos fundamentales del HTML
   - `_typography.scss`: Definición de fuentes y estilos tipográficos

4. **Layout (`/src/styles/layout/`):**
   - `_grid.scss`: Sistema de grid
   - `_page.scss`: Estructura general de página

5. **Components (`/src/styles/components/`):**
   - Cada componente en su propio archivo (header, footer, hero-banner, etc.)

6. **Animations (`/src/styles/animations/`):**
   - `_transitions.scss`: Animaciones y keyframes
   - `_hover-effects.scss`: Efectos de hover

### Desarrollo y Configuración

1. **Configuración Dinámica:** Utiliza `settings_schema.json` para definir el esquema de configuración de cada sección y `settings_data.json` para almacenar los valores dinámicos.
2. **Desarrollo Modular:** Crea nuevos componentes en `/src/styles/components/` y agrégalos al archivo principal `styles.scss`.
3. **Variables Globales:** Todas las variables están centralizadas en `_variables.scss` para facilitar el mantenimiento.
4. **Compilación y Pruebas:** Utiliza los comandos de npm para compilar y visualizar la aplicación con live reload.
5. **Implementación de Funcionalidades:** Asegúrate de documentar y modularizar el código para facilitar futuras mejoras y pruebas.

---

## Prueba Técnica Gradiweb - LP

Esta prueba técnica tiene como objetivo evaluar tu capacidad para:

- Respetar el diseño propuesto y ser pixel perfect.
- Implementar lógica y estilos utilizando HTML, SASS y JavaScript sin frameworks adicionales.
- Configurar y optimizar Webpack para un bundle eficiente.
- Aplicar buenas prácticas en GitHub (commits, manejo de ramas, PRs).
- Documentar el código de forma adecuada.

### Especificaciones de la Prueba

#### Header

- **Contenido:**
  - Primera columna: Logo de la marca.
  - Columna central: Iconos de medios de pago.
  - Columna derecha: Dos links ("All products" y "Collections") que realizan scroll hacia sus secciones correspondientes. Botón de carrito (presentacional).
- **Comportamientos:**
  - Diseño responsive y comportamiento sticky.
  - Al hacer scroll, aplicar un patrón de transparencia.

#### Footer

- **Contenido:**
  - Columna izquierda: Logo y texto proveniente de `settings_data.json`.
  - Columna central: Cuatro links principales (HOME, CART, ALL PRODUCTS, COLLECTIONS) y tres secundarios (refund policy, privacy policy, terms of service), todos en mayúsculas sin alterar con CSS o JavaScript, tomando datos desde `settings_data.json`.
  - Columna derecha: Input para newsletter (presentacional) y links a redes sociales (Facebook, X, Instagram).
- **Diseño:** Respetar los diseños para desktop y mobile.

#### Top Bar

- **Características:**
  - Comportamiento tipo marquee (texto en movimiento) siguiendo las animaciones proporcionadas.
  - Diseño responsive.

#### Hero Banner

- **Características:**
  - Botón con texto y link editable, configurados mediante `settings_data.json`.
  - Marquee en la parte inferior con animación, cuyos textos también provienen de `settings_data.json`.
  - Respetar diseño para desktop y móvil. La imagen se encuentra en la carpeta `/assets`.

#### Carrusel de Productos

- **Especificaciones:**
  - Mostrar 10 productos: 4 visibles inicialmente y 6 adicionales accesibles con el botón "view all". Se evaluará la solución técnica (ocultar/mostrar, JS asíncrono, paginación).
  - Cada producto debe mostrar: imagen, nombre, precio y tags.
  - Al hacer hover, la imagen del producto debe animarse con el efecto mostrado.

#### Colecciones

- **Especificaciones:**
  - Mostrar el título "Latest Collection", así como imágenes y nombres de las colecciones, configurados mediante `settings_data.json`.
  - Renderizar únicamente las colecciones creadas después del 1 de Enero del 2025.

### Recursos Adicionales

- [Repositorio GitHub - Shopify Simulator](https://github.com/gradiweb/Shopify-simulator-Framework)
- [Diseño Responsive](https://drive.google.com/file/d/1us9IhwS3S0XcGdIBxZlAiBcCRidB_ToM/view?usp=sharing)
- [Diseño Desktop](https://drive.google.com/file/d/17MhHrp978OjqwM0DLud_m70ZLi8ukYGr/view?usp=sharing)

---

¡Buena suerte y feliz codificación! 🚀

