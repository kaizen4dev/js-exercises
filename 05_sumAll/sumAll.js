const sumAll = function(start, end) {

  // Error checking

  // values are numbers
  if(typeof(start && end) != "number"){
    return "ERROR";
  }

  // numbers are integers
  if(!Number.isInteger(start) || !Number.isInteger(end)){
    return "ERROR";
  }

  // numbers are in correct order
   if(start > end){ 
    let temp = start;
    start = end;
    end = temp;
  }

  // numbers are positive
  if(start < 0 || end < 0){ 
    return "ERROR";
  } 


  // calculate result
  let result = 0; 
  for(let i = start; i <= end; i++){
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
