import dotenv from 'dotenv';

dotenv.config();

const mode = process.env.MODE;

const getMode =  async() => {

    try {

        if(mode === 'development'){

            console.log('El modo activado es el de desarrollo');

        } else if(mode === 'production'){

            console.log('El modo activado es el de producción');

        }

    }  catch (error) {
        console.error("Por favor, estable la variable de entorno MODE a 'development' o 'production'");
    }
};

export default getMode;
console.log(mode);