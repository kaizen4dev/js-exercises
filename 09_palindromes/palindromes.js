const palindromes = function (string) {
  // using strings //

  // let formated = string.toLowerCase().replace(/\W/g, "");

  // let newString = "";
  // for(let i = formated.length - 1; i >= 0; i--){
  //   newString += formated.at(i)
  // }

  // return formated == newString;


  // using arrays //
  
  let array = string.toLowerCase().replace(/\W/g, "").split("");

  let newArray = [];
  array.map((item) => newArray.unshift(item));

  for(key in array){
    if(array[key] != newArray[key]) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
