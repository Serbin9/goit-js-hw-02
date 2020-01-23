"use strict";
const findLongestWord = function(string) {
  const word = string.split(" ");
  let longerWords = word[0];

  for (let i = 1; i < word.length; i += 1) {
    if (longerWords.length < word[i].length) {
      longerWords = word[i];
    }
  }
  return longerWords;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
