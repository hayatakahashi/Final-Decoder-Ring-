// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = {
    "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
    "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52,
    "l": 13, "m": 23, "n": 33, "o": 43, "p": 53, "q": 14,
    "r": 24, "s": 34, "t": 44, "u": 54, "v": 15,
    "w": 25, "x": 35, "y": 45, "z": 55
  };

function polybius(input, encode = true) {
  let result = '';

  if (encode) {
    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      if (char === ' ') {
        result += ' ';
      } else {
        result += alphabet[char];
      }
    }
  } else {
    let coordinates = input.replace(/ /g, '').length;

    if (coordinates % 2 !== 0) return false;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        result += ' ';
      } else {
        let coordinate = input[i] + input[i + 1];
        i++; // Increment the index to account for the second digit

        if (coordinate === '42') {
          result += '(i/j)';
        } else {
          for (let letter in alphabet) {
            if (alphabet[letter] == coordinate) {
              result += letter;
              break;
            }
          }
        }
      }
    }
  }

  return result;
}



  return {
    polybius,
  };
})(); 

module.exports = { polybius: polybiusModule.polybius };
