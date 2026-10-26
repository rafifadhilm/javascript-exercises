const removeFromArray = function(array, ...toRemove) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
