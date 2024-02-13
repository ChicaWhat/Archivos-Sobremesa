const data = require('./datos');

const getAllData = () => {
    return data;
}

const getMayorEdad = () => {
    
    let mayor = data[0].age;

    for(let i = 0; i < data.length; i++){
        if(data[i].age > mayor){
            mayor = data[i].age;
        }
    }

    return mayor;
}
 
module.exports = {
    getAllData,
    getMayorEdad
}