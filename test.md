# GradiWeb

## Prueba técnica Gradiweb - LP

<aside>
🔥

Debes crear una landing page respetando el diseño propuesto para desktop y responsive usando nuestro framework Shopify Simulator.

</aside>

<aside>
🔥

Debes escoger dos secciones del diseño y completarlas (el top bar, el header y el footer no cuentan son obligatorias). Si la finalizas completa será valorado.

</aside>

<aside>
🔥

Para completar la prueba tendrás un plazo máximo de cuatro días.

</aside>

## Criterios a evaluar:

- Te vamos a proveer la documentación de nuestro simulador y lenguaje de templating (liquid). Queremos ver como te desenvuelves, interpretas y solucionas un problema con una tecnología desconocida.
- **Atención al detalle.** Gradiweb solo trabaja con clientes en Europa quienes tienen una atención al detalle y sensibilidad visual de otro mundo. ¿Que tanto puedes respetar el diseño y ser pixel perfect? ¿Que tan detallista eres para seguir especificaciones?
- Conocimiento y buenas practicas en HTML, css, webpack y javascript
- Conocimiento y buenas practicas en github. Github no se trata solo de hacer add - commit y push / pull. Esperamos ver buenas practicas en tus commits, manejo de ramas y tags 😉
- **JavaScript:** Capacidad para implementar lógica limpia y reutilizable (sin frameworks).
- **SASS:** Uso de buenas prácticas como variables, mixins y estructura modular.
- **Webpack:** Entendimiento de loaders, plugins, y optimización del bundle. (Faltan algunas configuraciones en la configuración de webpack del [Shopify simulator framework](https://github.com/gradiweb/Shopify-simulator-Framework), esperamos lo resuelvas 😉)
- **HTML/CSS:** Adherencia al diseño proporcionado y diseño responsivo. Además de ello evaluaremos la semántica del HTML usado así como el uso de buenas practicas de accesibilidad.
- **GitHub:** Buen uso de commits y PRs.
- Para los estilos debes usar la metodología [BEM](https://en.bem.info/methodology/)
- Debes crear un repositorio con tu solución, clonando [el repo](https://github.com/gradiweb/Shopify-simulator-Framework) o haciendo un fork y compartir el link para que nuestro equipo de desarrolladores pueda revisar. Nuestro equipo descargara el repo y ejecutara en un ambiente local tu solución así que asegúrate de contar con un readme detallado
- Debes documentar el código. Allí evaluaremos tu capacidad no solo para documentar, también para discernir que código realmente necesita documentación.
- 🚜 Milla extra. Esperamos ver tu toque adicional, animaciones, efectos y tu creatividad como frontend dev

A continuación describimos las especificaciones técnicas de la prueba.

## Secciones

### Header

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/96c9ac3a-223f-4335-b385-67e0c17aeb09/image.png)

- El header en su primera columna tendrá el logo de la marca
- El header en su columna central tendrá los iconos con los medios de pago aceptados
- El header en su columna derecha tendrá dos links (All products - Debería hacer scroll down a la sección Carrusel de productos si existe) (Collections - Debería hacer scroll down a la sección de colección si existe). El botón de carrito solo es presentacional
- El header debe respetar el diseño en desktop y responsive
- El header debe tener un comportamiento sticky
- Al hacer scroll y activar el sticky el header debería tener un patrón de transparencia ⬇️

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/4e103f22-eda9-4789-8f0f-24c722e88be6/image.png)

### Footer

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/631a5f8b-dc62-4d81-9fe1-0ca77a6414c2/image.png)

- El footer debe tener en su columna izquierda el logo y un texto deben venir de su objeto de configuración a través del `settings_data.json`
- El footer en la parte central debe tener 4 links principales (HOME, CART, ALL PRODUCTS, COLLECTIONS) y tres secundarios (refund policy - privacy policy - terms of service), los links (anchor) y el texto deben venir de su objeto de configuración a través del `settings_data.json`
- Los links del footer deben estar en mayúscula sin usar CSS, ni Javascript.
- El footer en la columna derecha tendrá un input (solo presentacional) de newsletter y en la parte inferior links para facebook, x e instagram.
- El footer debe respetar el diseño en desktop y responsive

### Top Bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/516b4a6b-f2b7-4998-90ca-5ae2bd24dc58/image.png)

- El topbar debe tener un comportamiento marquee como el detallado a continuación

![Recording 2025-01-08 at 19.51.24.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/898363cc-d5e1-4468-8f31-4df91304759c/Recording_2025-01-08_at_19.51.24.gif)

- El topbar debe respetar el diseño en responsive y desktop

### Hero Banner

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/9ae257a9-c5d0-4b69-bbad-7da9768c3fd2/image.png)

- El Hero banner debe tener un boton con texto editable y link editable a través de los `settings_data.json`
- El hero banner debe respetar el diseño en responsive y desktop. (La imagen se adjunta en la carpeta assets)
- El hero banner debe tener el la parte inferior un marquee cuyos textos también deben venir del su correspondiente objeto de configuración `settings_data.json`. Ademas de ello debe contar con la animación de tipo marquee ⬇️

    ![Recording 2025-01-08 at 19.58.03.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/c2bee3ba-3674-414d-bd6f-3593b43c2c21/Recording_2025-01-08_at_19.58.03.gif)


### Carrusel de productos

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/2c0b54b7-2715-479d-a78a-4359f64aed32/image.png)

- El carrusel de productos debe presentar 10 productos. 4 productos serán visibles y 6 productos solo serán descubiertos al realizar click en el botón view all ⬇️.  ¿Que solución técnica es más eficiente? ¿ocultar y mostrar? ¿usar javascript asíncrono? ¿paginación?🤔

    ![Recording 2025-01-08 at 20.03.29.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/66b6dec2-bc1f-430f-972b-5f1564df4d65/Recording_2025-01-08_at_20.03.29.gif)

- Cada ficha de producto debe mostrar la imagen de producto, el nombre y el precio y los tags (no se encuentran en el diseño pero es importante renderizarlos).
- En el evento hover en cada ficha de producto  la imagen debería tener el siguiente comportamiento ⬇️

    ![Recording 2025-01-08 at 20.07.38.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/a04eab37-6250-4c4a-8363-e4194a3b4dee/dba4f043-a94f-452f-b2e0-606de703808b/Recording_2025-01-08_at_20.07.38.gif)


### Colecciones

- El título de la colección (latest collection) así como las imágenes y nombre de la colección deben venir de su correspondiente objeto de configuración `settings_data.json`
- La sección de colecciones debe renderizar únicamente las colecciones creadas después del 1 de Enero del 2025

## Recursos de apoyo:

- [Repositorio github - Shopify simulator](https://github.com/gradiweb/Shopify-simulator-Framework)
- [Diseño responsive](https://drive.google.com/file/d/1us9IhwS3S0XcGdIBxZlAiBcCRidB_ToM/view?usp=sharing)
- [Diseño desktop](https://drive.google.com/file/d/17MhHrp978OjqwM0DLud_m70ZLi8ukYGr/view?usp=sharing)
