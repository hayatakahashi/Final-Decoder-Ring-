// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
  it("should encode a message by shifting the letters", () => {
    const input = "thinkful";
    const shift = 3;
    const expectedOutput = "wklqnixo";
    expect(caesar(input, shift)).to.equal(expectedOutput);
  });

  it("should decode a message by shifting the letters in the opposite direction", () => {
    const input = "wklqnixo";
    const shift = 3;
    const expectedOutput = "thinkful";
    expect(caesar(input, shift, false)).to.equal(expectedOutput);
  });

  it("should leave spaces and other symbols as is", () => {
    const input = "this is a secret message!";
    const shift = 8;
    const expectedOutput = "bpqa qa i amkzmb umaaiom!";
    expect(caesar(input, shift)).to.equal(expectedOutput);
  });

  it("should ignore capital letters", () => {
    const input = "This Is A Secret Message!";
    const shift = 8;
    const expectedOutput = "bpqa qa i amkzmb umaaiom!";
    expect(caesar(input, shift)).to.equal(expectedOutput);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const input = "thinkful";
    const shift = -3;
    const expectedOutput = "qefkhcri";
    expect(caesar(input, shift)).to.equal(expectedOutput);
  });

  it("should return false for invalid shift values", () => {
    const input = "thinkful";
    const invalidShifts = [undefined, 0, -26, 99];
    invalidShifts.forEach((shift) => {
      expect(caesar(input, shift)).to.be.false;
    });
  });
});
