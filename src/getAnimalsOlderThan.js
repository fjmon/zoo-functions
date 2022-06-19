const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.filter((sp) => sp.name === animal)[0]
    .residents.every((item) => item.age > age);
}
getAnimalsOlderThan('penguins', 2);

module.exports = getAnimalsOlderThan;
