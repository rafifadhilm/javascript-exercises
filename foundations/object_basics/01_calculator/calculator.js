const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(num) {
  return num.reduce((acc, number) => acc + number, 0);
};

const multiply = function(num) {
  return num.reduce((acc, number) => acc * number, 1);
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
