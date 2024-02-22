// Función controladora final que envía un error al cliente.
// eslint-disable-next-line no-unused-vars
const handleErrorController = (err, req, res, next) => {
    // Mostramos el error por consola.
    console.error(err);

    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
};

// Exportamos la función controladora.
export default handleErrorController;
