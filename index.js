function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseWord(word)

  if(word === reversedWord) {
    return true
  } else {
    return false
  }
} 

/* 
  Add your pseudocode here:
  make a reverse of the input string
  check if the reversed string is the same
  return true if it is
  return false if it is not
*/

/*
  Add written explanation of your solution here:
  The isPalindrone function calls the reverseWord function to 
  reverse the input and then compares the reversed input with the
  input and if it is the same then it returns a value of true, and
  if it is not the same then it returns a value of false.
*/

function reverseWord(word) {
  const array = word.split("")
  const reversedArray = array.reverse()
  const reversedWord = reversedArray.join("")
  return reversedWord
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
