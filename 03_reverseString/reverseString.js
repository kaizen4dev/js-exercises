const reverseString = function(str) {
  newStr = "";
  for(let i = str.length; i > 0; i--){
    newStr += str.at(i-1);
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
