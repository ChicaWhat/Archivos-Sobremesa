//taer el modulo fs --> file System
import fs from 'fs/promises';
//const fs = require('fs/promises') --> commonJs
import path from 'path';

const checkFile = async (file) => {
    try {
        
        await fs.access(file);
        console.log(`El archivo ${file} existe`);
    } catch (error) {
        console.log(`El archivo ${file} no existe`);
    }
}

const createDirectory = async () => {
    try {
        await fs.mkdir('./images');
        await fs.mkdir('./src/prueba1');
        console.log('Direcorio/s creado/s');
    } catch (error) {
        console.log('No se pudo crear el directorio');
    }
}

const readDirectory = async () => {
    try {
        
        const archivos = await fs.readdir('./');
        console.log(archivos);

        archivos.forEach((file) => {
            if(file == 'lectura.txt'){
                return console.log('Archivo existente');
            }
        })
    } catch (error) {
        console.log('Error!!!',error);
    }
}

const readFile = async (file) => {
    try {
        const data = await fs.readFile(file,'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const writeFile = async (fileName, body) => {
    try {
        await fs.writeFile(fileName,body);// crea el archivo si no existe y agrega cosas
        console.log('Archivo creado correctamente');
    } catch (error) {
        console.log(error);
    }
}

const modifyFile = async (fileName, body) => {
    try {
        await fs.appendFile(fileName, `\n${body}`);
        console.log('Archivo modificado....');
    } catch (error) {
        console.log(error);
    }
}

const deleteFile = async (fileName) => {
    try {
        
        await fs.unlink(fileName);

        console.log('Archivo eleminado correctamente');

    } catch (error) {
        console.log(error);
    }
}

//checkFile('./src/database/creadsssso.txt');
//createDirectory();
//readDirectory();
readFile('./src/database/creado.txt');
//writeFile('./src/database/creado.txt','Otra cosa que estoy escribiendo');
//modifyFile( './src/database/creado.txt','Otra cosa que estoy escribiendo');
//modifyFile('./lectura.txt','agrego algo nuevo en este archivo');
// const pathFile = path.join('./','lectura.txt');
// deleteFile(pathFile);