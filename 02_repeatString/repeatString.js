const repeatString = function(word, times) {
  let newWord = "";
  for(let i = 0; i < times; i++){
    newWord += word;
  };
  // if number of times to repeat is negative return error, else return new word
  return times < 0 ? "ERROR": newWord;
};

// Do not edit below this line
module.exports = repeatString;
