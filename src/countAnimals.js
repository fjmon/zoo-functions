const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const aniObj = {};
    species.forEach((item) => {
      aniObj[item.name] = item.residents.length;
    });
    return aniObj;
  }
  const { residents } = species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    return residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return residents.length;
}
module.exports = countAnimals;
