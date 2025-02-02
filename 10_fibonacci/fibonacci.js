const fibonacci = function(num) {
  // handle negative numbers
  if(num < 0) return "OOPS";

  // create array representation of fibonacci sequence
  let seq = [0, 1];
  // if needed(i.e. num is 2 or more), calculate sequence up to targeted number
  while(seq.length <= num){
    seq.push(seq[seq.length - 1] + seq[seq.length - 2])
  }
  // return result
  return seq[num];
};

// Do not edit below this line
module.exports = fibonacci;
