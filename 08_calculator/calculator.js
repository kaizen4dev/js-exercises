const add = function(...args) {
  return args.reduce((sum, addend) => sum += addend);
};

const subtract = function(...args) {
  return args.reduce((diff, num) => diff -= num);
};

const sum = function(array) {
  return array.reduce((sum, num) => sum += num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product *= num, 1);
};

const power = function(...args) {
  return args.reduce((result, num) => result **= num);
};

const factorial = function(num) {
  if(num <= 0) return 1;
	return num * factorial(num - 1);
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
