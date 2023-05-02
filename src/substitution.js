// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26) {
    return false;
  }

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = i + 1; j < alphabet.length; j++) {
      if (alphabet[i] === alphabet[j]) {
        return false;
      }
    }
  }

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const inputLowerCase = input.toLowerCase();
  let result = "";

  for (let i = 0; i < inputLowerCase.length; i++) {
    const char = inputLowerCase[i];

    if (char === " ") {
      result += " ";
      continue;
    }

    let index = standardAlphabet.indexOf(char);
    if (index !== -1) {
      const transposedChar = encode ? alphabet[index] : standardAlphabet[alphabet.indexOf(char)];
      result += transposedChar;
    } else {
      if (!encode) {
        index = alphabet.indexOf(char);
        if (index !== -1) {
          result += standardAlphabet[index];
        } else {
          result += char;
        }
      } else {
        result += char;
      }
    }
  }

  return result;
}

const substitutionModule = {
  substitution,
};

module.exports = { substitution: substitutionModule.substitution };
