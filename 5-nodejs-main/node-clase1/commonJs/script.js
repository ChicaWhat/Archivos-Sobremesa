//REPL --> consola de Node Read Eval Print Loop

const array = [4,3,6,7,1,8,9,12];


const imprimirArray = (array) => {
    array.forEach((element, index) => {
        console.log(`El elemento ${element} se encuentra en el indice ${index}`);
    });
}

const reducirArray = (array) => {
    const total = array.reduce((acum, currValue) => {
        return acum + currValue;
    });

    return total
};

imprimirArray(array);

const total = reducirArray(array);
console.log(`Total: ${total}`);