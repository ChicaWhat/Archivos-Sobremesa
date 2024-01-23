'use strict'

/* Crear loop de 24h, 0:00 a 23:00h.
 horario=<8 && horario>22 informa solo de "Son las 3:00"
 horario>8 && horario<=22 informa de "Son las 17:00, CUCÚ!" */



/* - Esta forma de hacerlo hace que lo tenga CASI CASI, pero del 8 al 22 con la frase CUCÚ está colocado al principio en vez de en su sitio. ¿Qué hace que ocurra algo así? - */


/* let horaCucu = 8

  for(let horasDia = 0; horasDia < 24; horasDia++){
      if(horasDia>7 && horasDia<23){
         continue;
     }
      console.log(`Son las ${horasDia}:00`);


         while(horaCucu<=22){
         console.log(`Son las ${horaCucu}:00, CUCÚ!`);
         horaCucu++;
         
     }
} */

// let horasDia = 0;

// for(let horasCucu = 0; horasCucu < 23; horasCucu++){
//     if(horasDia > 0  && horasDia < 8){
//         continue;
//     }  
//     while(horasDia <=23){
//         console.log(`Son las ${horasDia}:00`);
//         horasCucu++; 
 
//     }
//     console.log(`Son las ${horasCucu}:00, CUCÚ!`)
// }

/* - ESTE ES LA FORMA QUE CASI CASI HACE QUE LO TENGA!! - */

//   let horasDia = 0

//   for(let horasCucu = 8; horasCucu <=22; horasCucu++){
//       while(horasDia < 8){
//           console.log(`Son las ${horasDia}:00`);
//           horasDia++;
//       }

//       console.log(`Son las ${horasCucu}:00, CUCÚ!`);
//   }



/* - Con esta forma el bucle que creo es que, por cara hora generada en el while, se introduce en medio del 8 al 22 la oración 'Son las X, CUCÚ!' - */

//  let horasDia = 0;
//  let horasCucu = 8;

//  while(horasDia<24){
//      console.log(`Son las ${horasDia}:00`);
//      horasDia++;
// }   

//      for(let horasCucu = 8; horasCucu <= 23; horasCucu++){
//          console.log(`Son las ${horasCucu}:00, CUCÚ!`);
// }

/* - Otra de las dos formas más que he descifrado para intentar encontrar la solución a este ejercicio. - */

// let horaCucu = 8
// let horasDia = 0

// for(let horasDia = 0; horasDia < 24; horasDia++){
//    while(horaCucu<=22){
//        console.log(`Son las ${horaCucu}, CUCÚ!`);
//        horaCucu++;
//    }
//    console.log(`Son las ${horasDia}:00`)
// }


//   for(let horasDia = 0; horasDia<24; horasDia++){
//       if(horasDia >= 8 && horasDia <=22){
//           console.log(`Son las ${horasDia}:00, CUCU!`)
//       }
//       else{
//           console.log(`Son las ${horasDia}:00`)
//       }
//}




// for(let i=0; i<24; i++){

//     let hora = i;
//     let mensaje = "Son las " + hora + ":00,";
    
//     if(i>=8 && i<23){
//         mensaje = mensaje + " CUCÚ!";
//     }

//     console.log(mensaje);
//  }


  
 for(let i=0; i<24; i++){

     let hora = i;
     let mensaje = "Son las " + hora + ":00.";
    
     if(i>=8 && i<=12){
         let cucu = i%24;
         for(let b = 0; b < cucu; b++){
             mensaje = mensaje + " CUCÚ!";
         }
     }
         else if(i>=13 && i<23){
                 let cucuFormato = i%12;
             for(let c = 0; c < cucuFormato; c++){
                 mensaje = mensaje + " CUCÚ!";
         }
     }
     console.log(mensaje);
 }

 // Cucu se repite el mismo número de veces entre las 8 y las 12.
 // debo de conseguir que i = hora = cucu entre las 8 y las 12


/* function añadirCucu(mensaje, veces) {
    for(let i = 0; i < veces; i++){
        mensaje = mensaje + " CUCÚ!";
    }
    return mensaje;
 }
 
 for(let i=0; i<24; i++){
    let hora = i;
    let mensaje = "Son las " + hora + ":00.";
 
    if(i>=8 && i<=12){
        let cucu = i%24;
        mensaje = añadirCucu(mensaje, cucu);
    }
    else if(i>=13 && i<23){
        let cucuFormato = i%12;
        mensaje = añadirCucu(mensaje, cucuFormato);
    }
    console.log(mensaje);
 }
 */