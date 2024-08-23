const repeatString = function (string, num) {
  let multString = "";

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    multString += string;
  }
  return multString;
};

// Do not edit below this line
module.exports = repeatString;
