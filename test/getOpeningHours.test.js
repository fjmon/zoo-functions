const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed (Já que o Zoo está sempre fechado na segunda)', () => {
    const actual = getOpeningHours('monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday', () => {
    const testGetOpeningHours = () => getOpeningHours('Thu', '09:00-AM');

    expect(testGetOpeningHours).toThrowError('The day must be valid. Example: Monday');
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\'', () => {
    const testAbbreviation = () => getOpeningHours('Friday', '09:00-ZM');
    expect(testAbbreviation).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number', () => {
    const testErrorHour = () => getOpeningHours('Saturday', 'C9:00-AM');
    expect(testErrorHour).toThrowError('The hour should represent a number');
  });

  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: The minutes should represent a number', () => {
    const testErrorMinute = () => getOpeningHours('Sunday', '09:c0-AM');
    expect(testErrorMinute).toThrowError('The minutes should represent a number');
  });
});
