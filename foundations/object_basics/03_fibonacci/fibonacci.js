const fibonacci = function(num) {
  if (typeof num !== "number" || num <= 0 || Number.isNaN(num)) {
    return "OOPS";
  }

  if (num === 1) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
