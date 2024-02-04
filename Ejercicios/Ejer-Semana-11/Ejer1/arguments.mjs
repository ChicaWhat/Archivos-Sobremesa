import chalk from 'chalk';
// console.log(process.cwd());
const directorio = process.cwd();

// console.log(import.meta.url);

import moment from 'moment';
let currentTime = moment().format('hh:mm:ss');
// console.log(currentTime);

console.log(process.argv.slice(2));

const absolutePath = process.argv[2];
const now = process.argv[3];
const argv = process.argv.length;


  if (absolutePath === '--dirname'){
        console.log(chalk.blue(directorio));
            } else if(now === '--time'){
                console.log(chalk.blue(currentTime));
        } else {
        console.error(chalk.bgRed(`El argumento ${argv} no es válido`))
    };

