# Servidor básico

Crea un servidor que simule varias acciones referentes a un usuario. Debes agregar como mínimo un middleware de manejo de errores, uno de ruta no encontrada y otro para poder leer un body con contenido JSON. Como bonus, también sería interesante que agregues un middleware que muestre información sobre la petición entrante, por ejemplo, usando la dependencia [morgan](https://www.npmjs.com/package/morgan).

No te olvides de agregar el try catch a todos los middlewares que utilicen un método y de usar el parámetro next para enviar el error al middleware de errores. No importa si no arrojas ningún error, agrega siempre el try catch.

## Registro de usuario:

-   **Método:** `POST`

-   **Endpoint:** `/users`

-   **Body de la petición (en Postman):**

    ```json
    {
        "username": "hackaboss",
        "email": "email@example.com",
        "password": "123456"
    }
    ```

-   **Respuesta del servidor con código 201 (en Node):**

    ```javascript
    {
        status: 'ok',
        message: 'Usuario creado'
    }
    ```

## Obtener usuario:

-   **Método:** `GET`

-   **Endpoint:** `/users/:userId`

-   **Respuesta del servidor con código 200 (en Node):**

    ```javascript
    {
        status: 'ok',
        data: {
            user: `Datos del usuario con ID ${userId}`
        }
    }
    ```

## Editar usuario:

-   **Método:** `PUT`

-   **Endpoint:** `/users/:userId`

-   **Body de la petición (en Postman):**

    ```json
    {
        "username": "express96"
    }
    ```

-   **Respuesta del servidor con código 200 (en Node):**

    ```javascript
    {
        status: 'ok',
        message: `Nombre de usuario con ID ${userId} actualizado`
    }
    ```

## Borrar usuario:

-   **Método:** `DELETE`

-   **Endpoint:** `/users/:userId`

-   **Respuesta del servidor con código 200 (en Node):**

    ```javascript
    {
        status: 'ok',
        message: `Datos del usuario con ID ${userId} eliminados`
    }
    ```
