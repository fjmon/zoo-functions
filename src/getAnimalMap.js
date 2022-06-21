const data = require('../data/zoo_data');

const species = (animal) => !animal || !animal.includeNames;

const sexo = (residents, animal) =>
  residents.filter(({ sex: residentSex }) => animal.sex === residentSex);

const casa = (animal, residents, specieName) => {
  const habita = animal.sex ? sexo(residents, animal) : residents;
  let habitat = [...habita.map((resident) => resident.name)];
  habitat = animal.sorted ? habitat.sort() : habitat;
  const result = {};
  result[specieName] = habitat;
  return result;
};

const local = (animal) =>
  data.species.reduce((acc, { location, name: specieName, residents }) => {
    acc[location] = acc[location] || [];

    const sp = species(animal)
      ? specieName
      : casa(animal, residents, specieName);
    acc[location].push(sp);
    return acc;
  }, {});

function getAnimalMap(options) {
  const mapa = local(options);
  return mapa;
}

module.exports = getAnimalMap;
