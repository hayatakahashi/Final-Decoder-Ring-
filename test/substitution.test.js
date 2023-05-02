// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution.js");

describe("substitution()", () => {
  // ... (previous tests)

  it("should encode non-alphabetic characters in the input", () => {
    const input = "message123!";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const expected = "ykrrpik123!";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it("should decode non-alphabetic characters in the input", () => {
    const input = "ykrrpik123!";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const expected = "message123!";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
});