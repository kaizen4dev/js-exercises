const convertToCelsius = function(F) {
  const C = (F - 32) * (5/9);

  if(Number.isInteger(C)){
    return C;
  }

  return Number(C.toFixed(1));

};

const convertToFahrenheit = function(C) {
  const F = C * (9/5) + 32;

  if(Number.isInteger(F)){
    return F;
  }

  return Number(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
