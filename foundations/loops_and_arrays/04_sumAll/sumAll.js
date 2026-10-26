const sumAll = function(numOne, numTwo) {
  if ((numOne > 0 && numTwo > 0) &&
    (numOne % 1 === 0 && numTwo % 1 === 0) &&
    (typeof(numOne) === "number" && typeof(numTwo) === "number")
  ) {
    let firstNum = numOne;
    let secondNum = numTwo;
    
    if (numOne > numTwo) {
      firstNum = numTwo;
      secondNum = numOne;
    }
    
    let result = 0;
    for (let i = firstNum; i <= secondNum; i++) {
      result += i;
    }
    return result
  }

  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
