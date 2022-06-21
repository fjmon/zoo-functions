const data = require('../data/zoo_data');

const { employees, species } = data;
let buscaPeao;
const filtraPeao = employees.reduce((acc, curr) => {
  const obj = {
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: curr.responsibleFor.map((id) => species.find((specie) => specie.id === id).name),
    locations: curr.responsibleFor.map((id) => species.find((specie) => specie.id === id).location),
  };
  acc.push(obj);
  return acc;
}, []);

function getEmployeesCoverage(obj) {
  if (obj === undefined) return filtraPeao;
  if (obj.id) {
    buscaPeao = filtraPeao.find((curr) => curr.id === obj.id);
  }
  if (obj.name) {
    buscaPeao = filtraPeao.find((curr) => curr.fullName.includes(obj.name));
  }
  if (typeof buscaPeao === 'undefined') throw new Error('Informações inválidas');
  return buscaPeao;
}

module.exports = getEmployeesCoverage;
