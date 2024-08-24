const removeFromArray = function (array, ...remove) {
  for (const element of remove) {
    console.log(element);
    array = array.filter((value) => value !== element);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
