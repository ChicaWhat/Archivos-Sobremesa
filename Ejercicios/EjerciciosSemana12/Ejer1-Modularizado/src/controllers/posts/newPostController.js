// importamos el array de posts del fichero JSON correspondiente
import posts from '../../data/messages.json' assert { type: 'json' };

import fs from 'fs/promises';

import path from 'path';

import { v4 as uuidv4 } from 'uuid';

const newPostController = async (req, res, next) => {
    try {
        const { text } = req.body;

        posts.push({
            id: uuidv4(),
            text,
        });

        const pathPost = path.join(
            process.cwd(),
            'src',
            'data',
            'messages.json'
        );

        await fs.writeFile(pathPost, JSON.stringify(posts, null, 4));

        res.status(201).send({
            status: 'ok',
            message: `Mensaje creado con el mensaje: "${text}"`,
        });
    } catch (err) {
        console.log(err);
    }
};

export default newPostController;
