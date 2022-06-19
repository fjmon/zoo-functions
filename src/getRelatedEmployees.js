const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((item) => item.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees.filter((item) => item.managers.includes(managerId))
      .map((i) => `${i.firstName} ${i.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
