const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function(peoples) {
  return peoples.reduce((old, current) => {
    const oldestAge = getAge(old.yearOfBirth, old.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    return oldestAge < currentAge ? current : old;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
