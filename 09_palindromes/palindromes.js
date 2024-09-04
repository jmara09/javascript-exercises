const palindromes = function (string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (
      (code > 47 && code < 58) ||
      (code > 64 && code < 91) ||
      (code > 96 && code < 123)
    ) {
      str += string[i];
    }
  }

  str = str.toLowerCase();
  reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
