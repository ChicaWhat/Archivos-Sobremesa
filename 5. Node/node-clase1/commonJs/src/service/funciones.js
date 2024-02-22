
const getMayor = (a,b) => {
    
    if(a > b) return a;

    return b;
}

const getMenor = (a,b) => {
    
    if(a < b) return a;

    return b;
}

const getSuma = (a,b) => {
    return a + b;
}

const getResta = (a,b) => {
    return a - b;
}

module.exports = {
    getMayor,
    getMenor,
    getSuma,
    getResta
}