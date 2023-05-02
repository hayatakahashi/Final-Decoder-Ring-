// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius.js');

describe('polybius', () => {
  it('should encode the given input correctly', () => {
    const input = 'hello world';
    const expected = '3251131343 2543241341';
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it('should decode the given input correctly', () => {
    const input = '3251131343 2543241341';
    const expected = 'hello world';
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });

  it('should return false when decoding an invalid input', () => {
    const input = '325113134 2543241341';
    const actual = polybius(input, false);

    expect(actual).to.be.false;
  });

  it('should ignore capitalization when encoding', () => {
    const input = 'HeLLo WoRlD';
    const expected = '3251131343 2543241341';
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it('should maintain spaces in the input', () => {
    const input = 'hello world';
    const actual = polybius(input);
    expect(actual.split(' ')).to.have.lengthOf(2);
  });
}); 