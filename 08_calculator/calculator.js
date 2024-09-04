const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => total * num);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num == 0) return 1;

  let total = num;
  let multiplier = num;
  for (let i = 0; i < num; i++) {
    multiplier--;
    if (multiplier == 0) break;
    total *= multiplier;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
