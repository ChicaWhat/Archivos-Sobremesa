// Error: faltan campos.
export const missingFieldsError = () => {
    throw {
        message: 'Faltan campos',
        code: 'MISSING_FIELDS',
        httpStatus: 400, // Bad Request
    };
};

// Error: elemento no encontrado.
export const notFoundError = (resource) => {
    throw {
        message: `El recurso requerido '${resource}' no existe`,
        code: 'RESOURCE_NOT_FOUND',
        httpStatus: 404, // Not Found
    };
};
