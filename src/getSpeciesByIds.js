const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map((id) => species.find((item) => (item.id === id)));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;

/* Busque as espécies dos animais por meio de um id e retorne um array contendo todos os
animais dessa espécie.

Faça com que a função getSpeciesByIds possa receber vários parâmetros;
Se a função receber apenas um id, retorne a espécie do animal referente a este id;
Se a função receber vários ids, retorne todas as espécies referente a esses ids.

O que será testado:
Caso receba nenhum parâmetro, é necessário retornar um array vazio;
Ao receber como parâmetro um único id, retorna um array com a espécie referente a esse id;
Ao receber mais de um id, retorna um array com as espécies referentes aos ids. */
