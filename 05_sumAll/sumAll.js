const sumAll = function (num1, num2) {
  let sum = 0;
  const numArray = [num1, num2];

  for (let i = 0; i <= numArray.length - 1; i++) {
    if (isNaN(numArray[i])) {
      return "ERROR";
    } else if (!Number.isInteger(numArray[i]) || numArray[i] < 0) {
      return "ERROR";
    }
  }

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
