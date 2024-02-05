// la carpeta de node_modules NO debe de pasarse NUNCA  a un repositorio. Con el archivo de package-lock.json te puede instalar la carpeta de node_modules

// Se puede configurar cuantos espacios queremos que salte el tabulador con el archivo .prettierrc.json

// express hace uso de la dependencia de HTTP y ya solo se trabaja con express. Para instalarlo usamos npm i express

// El fichero principal va a ser siempre app.js

/* npm init -y
npm i prettier eslint -D
npm i express
npm i nodemon -D
npm run dev */

// Importamos express
import express from 'express';

const app = express();

// Middleware que es capaz de leer un body en formato JSON
app.use(express.json());

// Middleware que se ejecuta para cualquier tipo de peticion que entre en el servidor sin importar el método ni el endpoint (o ruta)
// Middleware que muestra por consola información acerca de la petición entrante
app.use((req, res, next) => {
    // Establecemos el codigo de estado y enviamos una respuesta al cliente
    // res.status(404).send('Hola desde Express');
    const { url, method } = req;

    // Mostramos por consola los valores anteriores
    console.log(`Método: ${method}, Endpoint: ${url}`);

    // Saltamos al siguiente middleware
    next();
});

// Middleware que retorne el listado de posts al cliente
app.get('/posts', (req, res) =>  {
        res.send({
            status: 'ok',
            data:  {
                posts: [{
                    id: 1,
                    text: 'Express me tiene frito',
                },
                {
                    id: 2,
                    text: 'Pa que me abré apuntao a un bootcamp...',
                    
                },
            ],
        },
    });
});

// Middleware  que me permita crear un post
app.post('/posts', (req, res) => {
    // Obtenemos el texto del post del body
    const { text } = req.body;

    // Si falta algún campo lanzamos un error
    if(!text) {
        const err = new Error('Falta campos');
        err.httpStatus = 400;
        throw err;
    }

        res.status(201).send({
            status: 'ok',
            message: `Post creado con el mensaje: ${text}`,
    });
});

// Middleware de manejo de errores
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});


// Middleware de ruta no encontrada
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});

// Le decimos al servidor que escuche peticiones en un puerto especifico
// Esta va a ser siempre nuestra última línea de código
app.listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});
