const findTheOldest = function(people) {
  function calcAge(person){
    let currentYear = 2025;

    if(!person.yearOfDeath){
      return currentYear - person.yearOfBirth;
    }

    return person.yearOfDeath - person.yearOfBirth;
  }

  return people.reduce((oldest, current) => {
    return calcAge(current) > calcAge(oldest) ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
