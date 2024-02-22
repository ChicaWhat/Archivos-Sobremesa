// Función controladora final para el middleware de ruta no encontrada.
const notFoundController = (req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
};

// Exportamos la función controladora.
export default notFoundController;
