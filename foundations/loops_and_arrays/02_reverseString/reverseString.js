const reverseString = function(string) {
  let result = '';
  const strLength = string.length;
  for (let i = strLength - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
