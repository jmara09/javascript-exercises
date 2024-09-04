const fibonacci = function (n) {
  if (parseInt(n) < 0) {
    return "OOPS";
  } else if (parseInt(n) == 0) {
    return 0;
  }

  let arr = [];
  let counter = parseInt(n);
  let last = 0;

  do {
    if (arr.length < 2) {
      arr.push(1);
      counter--;
    } else {
      let lastValue = arr[arr.length - 1];
      let secondToLast = arr[arr.length - 2];
      last = secondToLast + lastValue;
      arr.push(last);
      counter--;
    }
  } while (counter > 0);

  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
