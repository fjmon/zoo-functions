const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const animais = employees.find((item) => id.includes(item.id)).responsibleFor[0];
  return Object.values(species.find((anim) => anim.id === animais).residents.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  }));
}

module.exports = getOldestFromFirstSpecies;
