// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    if (!encode) shift = -shift; //This means that it'll be decoding. We'll have to shift it back to the original state.

    let result = ""

    input = input.toLowerCase(); //Think of input as the string I entered "Hayato"

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < input.length; i++) { 
      const index = alphabet.indexOf(input[i]);
      if (index !== -1) {
        const newIndex = (index + shift + 26) % 26;
        result = result + alphabet[newIndex];
      } else {
        result = result + input[i];
      }
    }

    return result; // Add this line to return the result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
