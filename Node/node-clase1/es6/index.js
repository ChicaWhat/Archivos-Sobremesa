import {suma, resta, mult, div} from './operations.js';
import getAllData from './src/database/db.js';

import { getMayor } from './src/service/funciones.js';

 console.log(suma(12,4));
 console.log(resta(12,4));
 console.log(mult(12,4));
 console.log(div(12,4));

 console.log(getAllData());

 console.log(getMayor(12,3));

