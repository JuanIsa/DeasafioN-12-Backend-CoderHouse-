
# Proyecto creado con Node JS
## `Primera entrega del desafío final` 
### Servidor API y app frontend.

## Scritps disponibles:
En la carpeta del proyecto hay varios comandos que podés correr. 
El primer comando luego de clonar o bajar y descomprimir el proyecto es el necesario para instarlar todas las dependencias para la ejeción de la app:

```
  npm i
```
Luego para poder correr la aplicación de manera unitaria:

```
  npm start
```
Si no se puede aprovechar la dependencia de desarrollo NodemonJS y ejecutar:

```
  npm run dev
```

Este comando va a hacer que la salida de la app se actualice en tiempo real.
La consola se va a ir recargando a medida de que hagas cambios en el código.

## `Endpoints disponibles`

`/api/productos`:

*  `GET '/:id'` Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores).

* `POST: '/'` Para incorporar productos al listado (disponible para administradores).
```
Ejemplo del body necesario en esta petición.
____________________________________________
{
  "nombre":"Cama",
  "descripcion":"Cama tipo king con base",
  "codigo":55668624,
  "foto":"https://www.elmueble.com/medio/2022/09/12/dormitorio-con-mantas-a-pie-de-cama-00539571_99d85a27_600x600.jpg",
  "precio":200,
  "stock":13
}
```

* `PUT: '/:id'` Actualiza un producto por su id (disponible para administradores).
```
Ejemplo del body necesario en esta petición.
____________________________________________
{
  "nombre":"Cama",
  "descripcion":"Cama tipo king con base",
  "codigo":55668624,
  "foto":"https://www.elmueble.com/medio/2022/09/12/dormitorio-con-mantas-a-pie-de-cama-00539571_99d85a27_600x600.jpg",
  "precio":200,
  "stock":13
}
```

* `DELETE: '/:id'` Borra un producto por su id (disponible para administradores).

```
Para ejecutar peticiones como administrador es necesario incluir en el header de la petición una key: "administrador", con el value: "true/false"
```

`/api/carrito`:

*  `POST: '/'` Crea un carrito y devuelve su id.

*  `DELETE: '/:id'` Vacía un carrito y lo elimina.

*  `GET: '/:id/productos'` Me permite listar todos los productos guardados en el carrito.

*  `POST: '/:id/productos'` Para incorporar productos al carrito por su id de producto.

*  `DELETE: '/:id/productos/:id_prod'` Eliminar un producto del carrito por su id de carrito y de producto.

## 🚀 Sobre mi.
Mi nombre es Juan Isa, soy FullStack developer con más de una década de experiencia 
autodidacta en el desarrollo de aplicaciones de escritorio y móviles en diversos tipos de lenguajes de programación.

