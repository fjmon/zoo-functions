const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const contador = {};
  const child = entrants.filter((item) => item.age < 18).length;
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const senior = entrants.filter((item) => item.age >= 50).length;
  contador.child = child;
  contador.adult = adult;
  contador.senior = senior;
  return contador;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const { child: entChild, adult: entAdult, senior: entSenior } = data.prices;
  return (child * entChild + adult * entAdult + senior * entSenior);
}

module.exports = { calculateEntry, countEntrants };
