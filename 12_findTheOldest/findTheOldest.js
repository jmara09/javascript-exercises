const findTheOldest = function (arr) {
  let oldPerson = arr
    .map((person) => {
      if (person.yearOfDeath == undefined) {
        let current = new Date();
        let currentYear = current.getFullYear();

        let pers = {
          name: person.name,
          age: currentYear - person.yearOfBirth,
        };
        return pers;
      } else {
        let perss = {
          name: person.name,
          age: person.yearOfDeath - person.yearOfBirth,
        };
        return perss;
      }
    })
    .sort((a, b) => b.age - a.age);

  return oldPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
