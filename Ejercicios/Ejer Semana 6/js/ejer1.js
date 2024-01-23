'use strict'


const firstRound = [
    { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
    { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
    { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
    { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
    { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
    { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
    { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
    { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
  ];
  
  // Escribe aquí tu código

// Un callback es la llamada a otra función. SIEMPRE
// En el caso de que el return sea una función, si podría ser un callback, si nosotros creamos una función con el nombre de la función que tenga el return

const firstRoundWithTotalScores = firstRound.map((data) => {

// La primera vuelta que da la vuelta es valor 1, con acumulador = 0.
    const totalScores = data.scores.reduce((acumulador, puntos) => {
        return acumulador + puntos;
    }, 0);

    return {team: data.team, scores: totalScores};
});

console.log(firstRoundWithTotalScores);


// Con el método sort se cree 
firstRoundWithTotalScores.sort((a, b) => {
    return b.scores - a.scores;
})
console.log(firstRoundWithTotalScores);

const bestTeam = firstRoundWithTotalScores[0];
const worstTeam = firstRoundWithTotalScores[firstRoundWithTotalScores.length - 1];

console.log(
    `El mejor team es ${bestTeam.team} con un total de ${bestTeam.scores} `
)

console.log(
    `El peor team es ${worstTeam.team} con un total de ${worstTeam.scores}`
)