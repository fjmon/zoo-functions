const data = require('../data/zoo_data');

const { species, hours } = data;

function diaSemana(dia) {
  const { open, close } = hours[dia];
  const animal = species.filter(({ availability }) => availability
    .includes(dia)).map(({ name }) => name);
  if (dia === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  if (dia !== 'Monday') {
    return {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: animal,
    };
  }
}
const funcionamento = (semana) => semana.reduce((accumulator, day) => {
  accumulator[day] = diaSemana(day);
  return accumulator;
}, {});

function getSchedule(scheduleTarget) {
  const animais = species.map(({ name }) => name);
  const dias = Object.keys(hours);
  if (animais.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: diaSemana(scheduleTarget) };
  }
  return funcionamento(dias);
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
