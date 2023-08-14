/*
    # Title

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// Solution 1 (8/14/2023)
const sentence = "The quick brown fox jumps over the lazy dog 123 @#@#@#@3";

function isPangram(string) {
  // Step 1: define alphabet and split it into array of letters
  const words = string
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .trim()
    .split(" ");

  const isDupplication = words.map((word, index) => {
    const letters = word.split("");

    const res = letters.some(
      (letter, index) => letters.indexOf(letter) !== index
    );

    return res;
  });

  const isPangram = isDupplication.some((bool) => bool === true);
  return isPangram === true ? false : true;
}

console.log(isPangram(sentence));
