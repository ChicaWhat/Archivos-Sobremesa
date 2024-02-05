'use strict'

import path from 'path';
import chalk from 'chalk';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const fecha = new Date();
const hora_actual = fecha.getHours();
const minuto_actual = fecha.getMinutes();
const segundo_actual = fecha.getSeconds();

for(let i = 2; i < process.argv.length; i++){

    if (process.argv[i] === "--time") {

        console.log(chalk.blue(`${hora_actual}:${minuto_actual}:${segundo_actual}`));

    } else if (process.argv[i] === "--dirname") {

        console.log(chalk.blue(__dirname));

    } else {

        console.error(chalk.red(`El argumento ${process.argv[i]} no es válido`));

    }

};