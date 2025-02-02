const removeFromArray = function(array, ...args) {

  // delete values from args in array
  for(value of args){
    for(let key = 0; key < array.length; key++){
      if(array[key] === value) delete array[key];
    }
  }

  // crate new array without "undefined" holes
  let newArray = [];
  for(let key = 0; key < array.length; key++){
    if(typeof(array[key]) != 'undefined') newArray.push(array[key]);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
