const leapYears = function(year) {
  // century years
  if(year % 100 == 0){
    return year % 400 == 0 ? true : false;
  }

  // normal years
  return year % 4 == 0 ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
