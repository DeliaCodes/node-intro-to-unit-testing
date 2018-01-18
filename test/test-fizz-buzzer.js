const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('Fizz Buzz', () => {

  it('if input is something other than a number', () => {
    const result = fizzBuzzer('T');

    expect(result.error).to.equal('T must be a number');
  });

  it('returns Fizz Buzz', () => {
    const result = fizzBuzzer(15);

    expect(result).to.equal('fizz-buzz');
  });



});
