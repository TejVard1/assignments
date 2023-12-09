/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newstr = str.replace(/[^a-zA-Z0-9]/g, "");
  let upstr = newstr.toUpperCase();
  console.log(upstr);
  for(let i=0; i<(upstr.length)/2; i++){
    if(upstr[i] != upstr[upstr.length - 1 - i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
