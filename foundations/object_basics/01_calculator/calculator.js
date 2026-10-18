const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => {
    total += curr;
    return total;}, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => {
    total *= curr;
    return total;}, 1);
};

const power = function(base, pow) {
  let total = 1;
	for (let i = 0; i < pow; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
  let total = 1;
	while (num > 0) {
    total *= num--;
  }
  return total;
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
