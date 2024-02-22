// Importamos los modelos.
import insertEntryModel from '../../models/entries/insertEntryModel.js';
import insertPhotoModel from '../../models/entries/insertPhotoModel.js';

// Importamos los errores.
import { missingFieldsError } from '../../services/errorService.js';
import { savePhoto } from '../../services/photoService.js';

// Función controladora final que agrega una nueva entrada.
const newEntryController = async (req, res, next) => {
    try {
        // Obtenemos los campos necesarios del body.
        const { title, place, description } = req.body;

        // Si faltan campos lanzamos un error.
        if (!title || !place || !description) {
            missingFieldsError();
        }

        // Insertamos la entrada y obtenemos el ID que la base de datos le ha otorgado.
        const entryId = await insertEntryModel(
            title,
            place,
            description,
            req.user.id,
        );

        // Array donde pushearemos las posibles fotos.
        const photos = [];

        // Si "req.files" existe quiere decir que hay algún archivo en la petición.
        if (req.files) {
            // Obtenemos un array con los valores de las propiedades de "req.files", es decir, un array
            // de objetos donde cada objeto será una foto. Para asegurarme de que el array de fotos solo
            // tenga tres fotos podemos hacer un slice por seguridad.
            const photosArr = Object.values(req.files).slice(0, 3);

            // Recorro el array de fotos.
            for (const photo of photosArr) {
                // Guardamos la foto en la carpeta de subida de archivos y obtenemos el nombre
                // que se le ha asignado.
                const photoName = await savePhoto(photo);

                // Guardamos la foto en la base de datos y obtenemos el ID que le ha asignado la base de datos.
                const photoId = await insertPhotoModel(photoName, entryId);

                // Pusheamos la foto al array de fotos.
                photos.push({
                    id: photoId,
                    name: photoName,
                });
            }
        }

        res.status(201).send({
            status: 'ok',
            data: {
                entry: {
                    id: entryId,
                    title,
                    place,
                    description,
                    userId: req.user.id,
                    photos,
                    createdAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

export default newEntryController;
